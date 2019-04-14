/**
 * Password implementation of a Formidable Field test suite
 */
import runFieldTests from '@/models/Formidable/Field/Core/field.abstract.spec.config';
import { FormidablePassword } from '@/models/Formidable/Field/Password/FormidablePassword';
import { PasswordFactory } from '@/models/Formidable/Field/Password/password.factory';
import { passwordFactoryTest } from '@/models/Formidable/Field/Password/password.factory.spec.config';
import { IFormidablePasswordProps } from '@/models/Formidable/Field/Password/password.props.interface';
import errorArrayHas from '@/utils/testing/errorArrayHas.function';
import { transformAndValidate } from 'class-transformer-validator';

describe('Formidable Password field', () => {
    let factory: PasswordFactory;

    beforeAll(() => {
        factory = new PasswordFactory();
    });

    describe('Core Field Tests', () => {
        passwordFactoryTest();
        runFieldTests(FormidablePassword, PasswordFactory);
    });

    describe('Initialization & Validation', () => {
        describe('Props', () => {
            // describe('fieldType', () => {
            // 	it('Only allows the Password FieldType', async () => {
            // 		for (const type in FieldType) {
            // 			if (FieldType[type] !== FieldType.Password) {
            // 				try {
            // 					await transformAndValidate(FormidablePassword, {fieldType: FieldType[type] });
            // 					fail(`Should have failed on an invalid Field Type ${FieldType[type]}`);
            // 				} catch (e) {
            // 					expect(errorArrayHas('fieldType', e)).toBeTruthy();
            // 				}
            // 			}
            // 		}
            // 	});
            // });

            describe('value', () => {
                it('Can initialize a FormidablePassword with valid basic props and a null value', async () => {
                    const validPassword: IFormidablePasswordProps = factory.buildField(
                        {
                            value: null
                        }
                    );
                    await transformAndValidate(
                        FormidablePassword,
                        validPassword
                    );
                });

                it('Can initialize a FormidablePassword with valid basic props and an Password string value', async () => {
                    const validPassword: IFormidablePasswordProps = factory.buildField(
                        {
                            value: 'thisIsMyPassword123!'
                        }
                    );
                    await transformAndValidate(
                        FormidablePassword,
                        validPassword
                    );
                });

                it('Fails when an object is used', async () => {
                    const invalidPassword: IFormidablePasswordProps = factory.buildField(
                        {
                            value: { blah: 5 } as any
                        }
                    );
                    try {
                        await transformAndValidate(
                            FormidablePassword,
                            invalidPassword
                        );
                    } catch (e) {
                        expect(e).toBeInstanceOf(Array);
                        expect(errorArrayHas('value', e)).toBeTruthy();
                    }
                });

                it('Fails when an array is used', async () => {
                    const invalidPassword: IFormidablePasswordProps = factory.buildField(
                        {
                            value: [1, 2, 3, 45, 5, 6] as any
                        }
                    );
                    try {
                        await transformAndValidate(
                            FormidablePassword,
                            invalidPassword
                        );
                    } catch (e) {
                        expect(e).toBeInstanceOf(Array);
                        expect(errorArrayHas('value', e)).toBeTruthy();
                    }
                });

                it('Fails when a Date is used', async () => {
                    const invalidPassword: IFormidablePasswordProps = factory.buildField(
                        {
                            value: new Date() as any
                        }
                    );
                    try {
                        await transformAndValidate(
                            FormidablePassword,
                            invalidPassword
                        );
                    } catch (e) {
                        expect(e).toBeInstanceOf(Array);
                        expect(errorArrayHas('value', e)).toBeTruthy();
                    }
                });
            });

            describe('min and max length restrictions', () => {
                it('are optional', async () => {
                    const validPayloads: Array<
                        Partial<IFormidablePasswordProps>
                    > = [
                        {
                            value: null
                        },
                        {
                            value: null,
                            maxLength: 10
                        },
                        {
                            value: null,
                            minLength: 1
                        },
                        {
                            value: null,
                            minLength: 1,
                            maxLength: 10
                        }
                    ];

                    Promise.all(
                        validPayloads.map(val => {
                            transformAndValidate(
                                FormidablePassword,
                                factory.buildField(val)
                            );
                        })
                    ).catch(e => {
                        expect(!errorArrayHas('minLength', e)).toBeTruthy();
                        expect(!errorArrayHas('maxLength', e)).toBeTruthy();
                    });
                });

                describe('fails on non-numeric minLength or maxLength', () => {
                    const invalidMinLength = [
                        {
                            it: 'fails on a string',
                            data: {
                                value: null,
                                minLength: 'some string'
                            }
                        },
                        {
                            it: 'fails on a boolean',
                            data: {
                                value: null,
                                minLength: true
                            }
                        },
                        {
                            it: 'fails on an object',
                            data: {
                                value: null,
                                minLength: {}
                            }
                        }
                    ];

                    // tslint:disable-next-line:forin
                    invalidMinLength.forEach(minLengthConfig => {
                        it(minLengthConfig.it, async () => {
                            try {
                                await transformAndValidate(
                                    FormidablePassword,
                                    factory.buildField(minLengthConfig.data)
                                );
                                fail(
                                    `Did not raise an error with min length ${
                                        minLengthConfig.data.minLength
                                    }`
                                );
                            } catch (e) {
                                expect(
                                    errorArrayHas('minLength', e)
                                ).toBeTruthy();
                            }
                        });
                    });

                    const invalidMaxLength = [
                        {
                            it: 'fails on a string',
                            data: {
                                value: null,
                                maxLength: 'some string'
                            }
                        },
                        {
                            it: 'fails on a boolean',
                            data: {
                                value: null,
                                maxLength: true
                            }
                        },
                        {
                            it: 'fails on an object',
                            data: {
                                value: null,
                                maxLength: {}
                            }
                        }
                    ];

                    // tslint:disable-next-line:forin
                    invalidMaxLength.forEach(maxLengthConfig => {
                        it(maxLengthConfig.it, async () => {
                            try {
                                await transformAndValidate(
                                    FormidablePassword,
                                    factory.buildField(maxLengthConfig.data)
                                );
                                fail(
                                    `Did not raise an error with maxLength ${
                                        maxLengthConfig.data.maxLength
                                    }`
                                );
                            } catch (e) {
                                expect(
                                    errorArrayHas('maxLength', e)
                                ).toBeTruthy();
                            }
                        });
                    });
                });

                it('fails when value is less than the provided minLength', async () => {
                    try {
                        const result = await transformAndValidate(
                            FormidablePassword,
                            factory.buildField({
                                value: 'a',
                                minLength: 2
                            })
                        );
                        fail(
                            `should have failed with a value whose length is less than the specified minLength`
                        );
                    } catch (e) {
                        expect(e).toBeInstanceOf(Array);
                        expect(errorArrayHas('value', e)).toBeTruthy();
                    }
                });

                it('fails when value is greater than the provided maxLength', async () => {
                    try {
                        const result = await transformAndValidate(
                            FormidablePassword,
                            factory.buildField({
                                value: 'abbv',
                                maxLength: 2
                            })
                        );
                        fail(
                            `should have failed with a value whose length is greater than the specified maxLength`
                        );
                    } catch (e) {
                        expect(e).toBeInstanceOf(Array);
                        expect(errorArrayHas('value', e)).toBeTruthy();
                    }
                });
            });
        });
    });
});
