import { TextFactory } from './text.factory';
/**
 * Number implementation of a Formidable Field test suite
 */
// import { IFormidableNumberProps } from '@/models/Formidable/Field/FormidableNumber';
import { transformAndValidate } from 'class-transformer-validator';
import { FieldType } from '@/models/Formidable/Field/field.abstract';
import runFieldTests, {
    errorArrayHas
} from '@/models/Formidable/Field/field.abstract.spec.config';
import {
    FormidableText,
    IFormidableTextProps
} from '@/models/Formidable/Field/Text/FormidableText';
import textFieldComponentTests from './text.spec.component';
import { textFactoryTest } from './text.factory.spec.config';

describe('Formidable Text field', () => {
    let factory: TextFactory;

    beforeAll(() => {
        factory = new TextFactory();
    });

    describe('Core Field Tests', () => {
        textFactoryTest();
        runFieldTests(FormidableText, TextFactory);
        // tslint:disable-next-line:no-unused-expression
        // textFieldComponentTests;
    });

    describe('Initialization & Validation', () => {
        describe('Props', () => {
            describe('fieldType', () => {
                xit('Only allows the text FieldType', async () => {
                    try {
                        await transformAndValidate(FormidableText, {
                            fieldfieldType: FieldType.Number
                        });
                        fail(
                            `Should have failed on an invalid Field Type ${
                                FieldType.Number
                            }`
                        );
                    } catch (e) {
                        expect(errorArrayHas('fieldType', e)).toBeTruthy();
                    }
                    Object.keys(FieldType).map(async val => {
                        try {
                            await transformAndValidate(FormidableText, {
                                fieldfieldType: val
                            });
                            fail(
                                `Should have failed on an invalid Field Type ${val}`
                            );
                        } catch (e) {
                            expect(errorArrayHas('fieldType', e)).toBeTruthy();
                        }
                    });
                });
            });

            describe('value', () => {
                it('Can initialize a FormidableText with valid basic props and a null value', async () => {
                    const validText: IFormidableTextProps = factory.buildField({
                        value: null
                    });
                    await transformAndValidate(FormidableText, validText);
                });

                it('Can initialize a FormidableText with valid basic props and a string value', async () => {
                    const validText: IFormidableTextProps = factory.buildField({
                        value: 'Some string value'
                    });
                    await transformAndValidate(FormidableText, validText);
                });

                it('Fails when a number is used', async () => {
                    const invalidText: IFormidableTextProps = factory.buildField(
                        {
                            value: 5 as any
                        }
                    );
                    try {
                        await transformAndValidate(FormidableText, invalidText);
                        fail(
                            `Did not fail on a numeric value for a text field`
                        );
                    } catch (e) {
                        expect(e).toBeInstanceOf(Array);
                        expect(errorArrayHas('value', e)).toBeTruthy();
                    }
                });

                it('Fails when an object is used', async () => {
                    const invalidText: IFormidableTextProps = factory.buildField(
                        {
                            value: { blah: 5 } as any
                        }
                    );
                    try {
                        await transformAndValidate(FormidableText, invalidText);
                    } catch (e) {
                        expect(e).toBeInstanceOf(Array);
                        expect(errorArrayHas('value', e)).toBeTruthy();
                    }
                });

                it('Fails when an array is used', async () => {
                    const invalidText: IFormidableTextProps = factory.buildField(
                        {
                            value: [1, 2, 3, 45, 5, 6] as any
                        }
                    );
                    try {
                        await transformAndValidate(FormidableText, invalidText);
                    } catch (e) {
                        expect(e).toBeInstanceOf(Array);
                        expect(errorArrayHas('value', e)).toBeTruthy();
                    }
                });

                it('Fails when a Date is used', async () => {
                    const invalidText: IFormidableTextProps = factory.buildField(
                        {
                            value: new Date() as any
                        }
                    );
                    try {
                        await transformAndValidate(FormidableText, invalidText);
                    } catch (e) {
                        expect(e).toBeInstanceOf(Array);
                        expect(errorArrayHas('value', e)).toBeTruthy();
                    }
                });
            });

            describe('min and max length restrictions', () => {
                it('are optional', async () => {
                    const validPayloads: Array<
                        Partial<IFormidableTextProps>
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
                                FormidableText,
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
                                    FormidableText,
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
                                    FormidableText,
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
                            FormidableText,
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
                            FormidableText,
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
