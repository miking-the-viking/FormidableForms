import { FormidableNumber, IFormidableNumberProps } from '@/models/Formidable/Field/FormidableNumber';
import { transformAndValidate } from 'class-transformer-validator';
import { FieldType } from '@/models/Formidable/Field/field.abstract';
import { errorArrayHas, runFieldTests } from './field.abstract';

describe('Formidable Number field', () => {

    describe('Core Field Tests', () => {
        runFieldTests(FormidableNumber);
    });

    describe('Initialization & Validation', () => {

        describe('Props', () => {

            describe('type', () => {
                it('Only allows the Number FieldType', async () => {
                    for (const type in FieldType) {
                        if (type !== FieldType.Number) {
                            try {
                                await transformAndValidate(FormidableNumber, {type: FieldType[type]});
                            } catch (e) {
                                expect(errorArrayHas('type', e)).toBeTruthy();
                            }
                        }
                    }
                });
            });

            describe('value', () => {

                it('Can initialize a FormidableNumber with valid basic props and a null value', async () => {
                    const validNumber: IFormidableNumberProps = {
                        type: FieldType.Number,
                        value: null
                    };
                    await transformAndValidate(FormidableNumber, validNumber);
                });

                it('Can initialize a FormidableNumber with valid basic props and a numeric value', async () => {
                    const validNumber: IFormidableNumberProps = {
                        type: FieldType.Number,
                        value: 5
                    };
                    await transformAndValidate(FormidableNumber, validNumber);
                });

                it('Fails when a string is used', async () => {
                    const invalidNumber: IFormidableNumberProps = {
                        type: FieldType.Number,
                        value: 5
                    };
                    try {
                        await transformAndValidate(FormidableNumber, invalidNumber);
                    } catch (e) {
                        expect(e).toBeInstanceOf(Array);
                        expect(errorArrayHas('value', e)).toBeTruthy();
                    }
                });

                it('Fails when an object is used', async () => {
                    const invalidNumber: IFormidableNumberProps = {
                        type: FieldType.Number,
                        value: {blah: 5}
                    };
                    try {
                        await transformAndValidate(FormidableNumber, invalidNumber);
                    } catch (e) {
                        expect(e).toBeInstanceOf(Array);
                        expect(errorArrayHas('value', e)).toBeTruthy();
                    }
                });

                it('Fails when an array is used', async () => {
                    const invalidNumber: IFormidableNumberProps = {
                        type: FieldType.Number,
                        value: [1, 2, 3, 45, 5, 6]
                    };
                    try {
                        await transformAndValidate(FormidableNumber, invalidNumber);
                    } catch (e) {
                        expect(e).toBeInstanceOf(Array);
                        expect(errorArrayHas('value', e)).toBeTruthy();
                    }
                });

                it('Fails when a Date is used', async () => {
                    const invalidNumber: IFormidableNumberProps = {
                        type: FieldType.Number,
                        value: new Date()
                    };
                    try {
                        await transformAndValidate(FormidableNumber, invalidNumber);
                    } catch (e) {
                        expect(e).toBeInstanceOf(Array);
                        expect(errorArrayHas('value', e)).toBeTruthy();
                    }
                });
            });

            describe('minimum and maximum', () => {
                it('are not required', async () => {
                    await transformAndValidate(FormidableNumber, {type: FieldType.Number, value: 1});
                });

                it('accepts numeric values', async () => {
                    await transformAndValidate(
                        FormidableNumber,
                        { type: FieldType.Number, value: 1, minimum: 1, maximum: 1000 }
                    );
                });

                it('fails on non-numeric values', async () => {
                    const invalidParameters = [
                        {
                            minimum: 'some string',
                            maximum: {a: 'object'}
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

                    Promise.all(invalidParameters.map(async (invalid) => {
                        try {
                            await transformAndValidate(
                                FormidableNumber,
                                {type: FieldType.Number, value: 1, ...invalid}
                            );
                        } catch (e) {
                            expect(errorArrayHas('minimum', e)).toBeTruthy();
                            expect(errorArrayHas('maximum', e)).toBeTruthy();
                        }
                    }));
                });
            })

        });
    });

});
