import runFieldTests from '@/models/Formidable/Field/Core/field.abstract.spec.config';
import { FieldType } from '@/models/Formidable/Field/Core/field.types.enum';
import { FormidableTextarea } from '@/models/Formidable/Field/Textarea/FormidableTextarea';
import { TextareaFactory } from '@/models/Formidable/Field/Textarea/textarea.factory';
import { textareaFactoryTest } from '@/models/Formidable/Field/Textarea/textarea.factory.spec.config';
import { IFormidableTextareaProps } from '@/models/Formidable/Field/Textarea/textarea.props.interface';
import errorArrayHas from '@/utils/testing/errorArrayHas.function';
import { transformAndValidate } from 'class-transformer-validator';

describe('Formidable Textarea field', () => {
    let factory: TextareaFactory;

    beforeAll(() => {
        factory = new TextareaFactory();
    });

    describe('Core Field Tests', () => {
        textareaFactoryTest();
        runFieldTests(FormidableTextarea, TextareaFactory);
    });

    describe('Initialization & Validation', () => {
        describe('Props', () => {
            describe('fieldType', () => {
                xit('Only allows the textarea FieldType', async () => {
                    try {
                        await transformAndValidate(FormidableTextarea, {
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
                            await transformAndValidate(FormidableTextarea, {
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
                    const validText: IFormidableTextareaProps = factory.buildField(
                        {
                            value: null
                        }
                    );
                    await transformAndValidate(FormidableTextarea, validText);
                });

                it('Can initialize a FormidableText with valid basic props and a string value', async () => {
                    const validText: IFormidableTextareaProps = factory.buildField(
                        {
                            value: 'Some string value'
                        }
                    );
                    await transformAndValidate(FormidableTextarea, validText);
                });

                it('Fails when a number is used', async () => {
                    const invalidText: IFormidableTextareaProps = factory.buildField(
                        {
                            value: 5 as any
                        }
                    );
                    try {
                        await transformAndValidate(
                            FormidableTextarea,
                            invalidText
                        );
                        fail(
                            `Did not fail on a numeric value for a text field`
                        );
                    } catch (e) {
                        expect(e).toBeInstanceOf(Array);
                        expect(errorArrayHas('value', e)).toBeTruthy();
                    }
                });

                it('Fails when an object is used', async () => {
                    const invalidText: IFormidableTextareaProps = factory.buildField(
                        {
                            value: { blah: 5 } as any
                        }
                    );
                    try {
                        await transformAndValidate(
                            FormidableTextarea,
                            invalidText
                        );
                    } catch (e) {
                        expect(e).toBeInstanceOf(Array);
                        expect(errorArrayHas('value', e)).toBeTruthy();
                    }
                });

                it('Fails when an array is used', async () => {
                    const invalidText: IFormidableTextareaProps = factory.buildField(
                        {
                            value: [1, 2, 3, 45, 5, 6] as any
                        }
                    );
                    try {
                        await transformAndValidate(
                            FormidableTextarea,
                            invalidText
                        );
                    } catch (e) {
                        expect(e).toBeInstanceOf(Array);
                        expect(errorArrayHas('value', e)).toBeTruthy();
                    }
                });

                it('Fails when a Date is used', async () => {
                    const invalidText: IFormidableTextareaProps = factory.buildField(
                        {
                            value: new Date() as any
                        }
                    );
                    try {
                        await transformAndValidate(
                            FormidableTextarea,
                            invalidText
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
                        Partial<IFormidableTextareaProps>
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
                                FormidableTextarea,
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
                                    FormidableTextarea,
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
                                    FormidableTextarea,
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
                            FormidableTextarea,
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
                            FormidableTextarea,
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
