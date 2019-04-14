/**
 * Number implementation of a Formidable Field test suite
 */
import { NumberFactory } from '@/models/Formidable/Field/Number/number.factory';
import { FormidableField } from '@/models/Formidable/Field/field.abstract';
import {
    FormidableNumber,
    IFormidableNumberProps
} from '@/models/Formidable/Field/Number/FormidableNumber';
import { transformAndValidate } from 'class-transformer-validator';
import { FieldType } from '@/models/Formidable/Field/field.abstract';
import runFieldTests, {
    errorArrayHas
} from '@/models/Formidable/Field/field.abstract.spec.config';
import { numberFactoryTest } from './number.factory.spec.config';
import {
    FieldConfigType,
    FieldCtorType,
    getInstance
} from '@/models/Formidable/Form/form.abstract';
// import numberFieldComponentTests from './number.spec.component';

describe('Formidable Number field', () => {
    let factory: NumberFactory;

    beforeAll(() => {
        factory = new NumberFactory();
    });

    describe('Core Field Tests', () => {
        numberFactoryTest();
        runFieldTests(FormidableNumber, NumberFactory);
        // tslint:disable-next-line:no-unused-expression
        // numberFieldComponentTests;
    });

    describe('Initialization & Validation', () => {
        describe('Props', () => {
            describe('fieldType', () => {
                it('Only allows the Number FieldType', async () => {
                    for (const type in FieldType) {
                        if (type !== FieldType.Number) {
                            try {
                                await transformAndValidate(FormidableNumber, {
                                    fieldType: FieldType[type]
                                });
                            } catch (e) {
                                expect(
                                    errorArrayHas('fieldType', e)
                                ).toBeTruthy();
                            }
                        }
                    }
                });
            });

            describe('value', () => {
                it('Can initialize a FormidableNumber with valid basic props and a null value', async () => {
                    const validNumber: IFormidableNumberProps = factory.buildField(
                        { value: null }
                    );
                    await transformAndValidate(FormidableNumber, validNumber);
                });

                it('Can initialize a FormidableNumber with valid basic props and a numeric value', async () => {
                    const validNumber: IFormidableNumberProps = factory.buildField(
                        { value: 5 }
                    );
                    await transformAndValidate(FormidableNumber, validNumber);
                });

                it('Fails when a string is used', async () => {
                    const invalidNumber: IFormidableNumberProps = factory.buildField(
                        {
                            value: 5
                        }
                    );
                    try {
                        await transformAndValidate(
                            FormidableNumber,
                            invalidNumber
                        );
                    } catch (e) {
                        expect(e).toBeInstanceOf(Array);
                        expect(errorArrayHas('value', e)).toBeTruthy();
                    }
                });

                it('Fails when an object is used', async () => {
                    const invalidNumber: IFormidableNumberProps = factory.buildField(
                        {
                            value: { blah: 5 } as any
                        }
                    );
                    try {
                        await transformAndValidate(
                            FormidableNumber,
                            invalidNumber
                        );
                    } catch (e) {
                        expect(e).toBeInstanceOf(Array);
                        expect(errorArrayHas('value', e)).toBeTruthy();
                    }
                });

                it('Fails when an array is used', async () => {
                    const invalidNumber: IFormidableNumberProps = factory.buildField(
                        {
                            value: [1, 2, 3, 45, 5, 6] as any
                        }
                    );
                    try {
                        await transformAndValidate(
                            FormidableNumber,
                            invalidNumber
                        );
                    } catch (e) {
                        expect(e).toBeInstanceOf(Array);
                        expect(errorArrayHas('value', e)).toBeTruthy();
                    }
                });

                it('Fails when a Date is used', async () => {
                    const invalidNumber: IFormidableNumberProps = factory.buildField(
                        {
                            value: new Date() as any
                        }
                    );
                    try {
                        await transformAndValidate(
                            FormidableNumber,
                            invalidNumber
                        );
                    } catch (e) {
                        expect(e).toBeInstanceOf(Array);
                        expect(errorArrayHas('value', e)).toBeTruthy();
                    }
                });
            });

            describe('minimum and maximum', () => {
                it('are not required', async () => {
                    await transformAndValidate(
                        FormidableNumber,
                        factory.buildField({
                            value: 1
                        })
                    );
                });

                it('accepts numeric values', async () => {
                    await transformAndValidate(
                        FormidableNumber,
                        factory.buildField({
                            value: 1,
                            minimum: 1,
                            maximum: 1000
                        })
                    );
                });

                it('fails on non-numeric values', async () => {
                    const invalidParameters = [
                        {
                            minimum: 'some string',
                            maximum: { a: 'object' }
                        },
                        {
                            minimum: false,
                            maximum: true
                        },
                        {
                            minimum: () => 'function',
                            maximum: new Date()
                        }
                    ];

                    Promise.all(
                        invalidParameters.map(async invalid => {
                            try {
                                await transformAndValidate(
                                    FormidableNumber,
                                    factory.buildField({
                                        value: 1,
                                        ...invalid
                                    })
                                );
                                fail(
                                    `Should have failed with the non numeric value`
                                );
                            } catch (e) {
                                expect(
                                    errorArrayHas('minimum', e)
                                ).toBeTruthy();
                                expect(
                                    errorArrayHas('maximum', e)
                                ).toBeTruthy();
                            }
                        })
                    );
                });

                it('fails when the value is less than the minimum', async () => {
                    try {
                        await transformAndValidate(
                            FormidableNumber,
                            factory.buildField({
                                value: 1,
                                minimum: 2
                            })
                        );
                        fail(
                            `should have failed with a value less than the minimum`
                        );
                    } catch (e) {
                        expect(errorArrayHas('value', e)).toBeTruthy();
                    }
                });

                it('fails when the value is greater than the maximum', async () => {
                    try {
                        await transformAndValidate(
                            FormidableNumber,
                            factory.buildField({
                                value: 6,
                                maximum: 5
                            })
                        );
                        fail(
                            `should have failed with a value less than the minimum`
                        );
                    } catch (e) {
                        expect(errorArrayHas('value', e)).toBeTruthy();
                    }
                });

                it('fails when minimum is greater than maximum', async () => {
                    try {
                        const result = await transformAndValidate(
                            FormidableNumber,
                            factory.buildField({
                                value: 10,
                                maximum: 11,
                                minimum: 12
                            })
                        );
                        fail(
                            `should have failed when the maximum was less than the minimum`
                        );
                    } catch (e) {
                        expect(e).toBeInstanceOf(Array);
                        expect(errorArrayHas('minimum', e)).toBeTruthy();
                        expect(errorArrayHas('maximum', e)).toBeTruthy();
                    }
                });
            });
        });
    });
});
