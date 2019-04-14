/**
 * NumberRange implementation of a Formidable Field test suite
 */
import runFieldTests from '@/models/Formidable/Field/Core/field.abstract.spec.config';
import { FormidableNumberRange } from '@/models/Formidable/Field/NumberRange/FormidableNumberRange';
import { NumberRangeFactory } from '@/models/Formidable/Field/NumberRange/numberRange.factory';
import { numberRangeFactoryTest } from '@/models/Formidable/Field/NumberRange/numberRange.factory.spec.config';
import { plainToClass } from 'class-transformer';
import { transformAndValidate } from 'class-transformer-validator';
import { validate } from 'class-validator';

describe('Formidable NumberRange field', () => {
    let factory: NumberRangeFactory;

    beforeAll(() => {
        factory = new NumberRangeFactory();
    });

    describe('Core Field Tests', () => {
        numberRangeFactoryTest();
        runFieldTests(FormidableNumberRange, NumberRangeFactory);
    });

    describe('Initialization & Validation', () => {
        describe('Props', () => {
            // describe('fieldType', () => {
            // 	it('Only allows the NumberRange FieldType', async () => {
            // 		for (const type in FieldType) {
            // 			if (type !== FieldType.NumberRange) {
            // 				try {
            // 					await transformAndValidate(FormidableNumberRange, {fieldfieldType: FieldType[type] });
            // 				} catch (e) {
            // 					expect(errorArrayHas('fieldType', e)).toBeTruthy();
            // 				}
            // 			}
            // 		}
            // 	});
            // });

            describe('value', () => {
                it('Can initialize a FormidableNumberRange with valid basic props and a null value from from and to', async () => {
                    const validNumberRange: IFormidableNumberRangeProps = factory.buildField(
                        {
                            value: {
                                from: null,
                                to: null
                            }
                        }
                    );
                    await transformAndValidate(
                        FormidableNumberRange,
                        validNumberRange
                    );
                });

                it('Can initialize a FormidableNumberRange with valid basic props and number values for from and to', async () => {
                    const validNumberRange: IFormidableNumberRangeProps = factory.buildField(
                        {
                            value: {
                                from: 1,
                                to: 10
                            }
                        }
                    );
                    await transformAndValidate(
                        FormidableNumberRange,
                        validNumberRange
                    );

                    const NumberRange = plainToClass(
                        FormidableNumberRange,
                        validNumberRange
                    );
                    const errs = await validate(NumberRange);
                    expect(errs).toBeInstanceOf(Array);
                    if (errs.length > 0) {
                        throw errs;
                    }
                });

                it('Fails to validate a FormidableNumberRange with a to less than the from', async () => {
                    const validNumberRange: IFormidableNumberRangeProps = factory.buildField(
                        {
                            value: {
                                from: 8,
                                to: 6
                            }
                        }
                    );
                    try {
                        await transformAndValidate(
                            FormidableNumberRange,
                            validNumberRange
                        );
                        fail(
                            'should\'ve failed with a to value greater than the from value'
                        );
                    } catch (e) {
                        expect(errorArrayHas('value', e)).toBeTruthy();
                    }
                });
            });
        });
    });
});
