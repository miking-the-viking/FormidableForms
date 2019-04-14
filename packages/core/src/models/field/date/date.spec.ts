/**
 * Date implementation of a Formidable Field test suite
 */
import { FormidableDate } from '@/models/field/date/FormidableDate';
import errorArrayHas from '@/utils/testing/errorArrayHas.function';
import { transformAndValidate } from 'class-transformer-validator';
import runFieldTests from '@/models/field/core/field.abstract.spec.config';
import { DateFactory } from '@/models/field/date/date.factory';
import { dateFactoryTest } from '@/models/field/date/date.factory.spec.config';
import { IFormidableDateProps } from '@/models/field/date/date.props.interface';

describe('Formidable Date field', () => {
    let factory: DateFactory;

    beforeAll(() => {
        factory = new DateFactory();
    });

    describe('Core Field Tests', () => {
        dateFactoryTest();
        runFieldTests(FormidableDate, DateFactory);
    });

    describe('Initialization & Validation', () => {
        describe('Props', () => {
            // describe('fieldType', () => {
            // 	it('Only allows the Date FieldType', async () => {
            // 		for (const type in FieldType) {
            // 			if (FieldType[type] !== FieldType.Date) {
            // 				try {
            // 					await transformAndValidate(FormidableDate, {fieldType: FieldType[type] });
            // 					fail(`Should have failed on an invalid Field Type ${FieldType[type]}`);
            // 				} catch (e) {
            // 					expect(errorArrayHas('fieldType', e)).toBeTruthy();
            // 				}
            // 			}
            // 		}
            // 	});
            // });

            describe('value', () => {
                it('Can initialize a FormidableDate with valid basic props and a null value', async () => {
                    const validDate: IFormidableDateProps = factory.buildField({
                        value: null
                    });
                    await transformAndValidate(FormidableDate, validDate);
                });

                it('Can initialize a FormidableDate with valid basic props and a Date string value', async () => {
                    const validDate: IFormidableDateProps = factory.buildField({
                        value: new Date().toISOString()
                    });
                    await transformAndValidate(FormidableDate, validDate);
                });

                xit('Fails when just a number is used', async () => {
                    const invalidDate: IFormidableDateProps = factory.buildField(
                        {
                            value: 1337 as any
                        }
                    );
                    try {
                        await transformAndValidate(FormidableDate, invalidDate);
                        fail(
                            `Did not fail on a numeric value for a Date field`
                        );
                    } catch (e) {
                        expect(e).toBeInstanceOf(Array);
                        expect(errorArrayHas('value', e)).toBeTruthy();
                    }
                });

                xit('Fails when a non-Date string is used', async () => {
                    const invalidDate: IFormidableDateProps = factory.buildField(
                        {
                            value: 'not a damn Date'
                        }
                    );
                    try {
                        await transformAndValidate(FormidableDate, invalidDate);
                        fail(
                            `Did not fail on a numeric value for a Date field`
                        );
                    } catch (e) {
                        expect(e).toBeInstanceOf(Array);
                        expect(errorArrayHas('value', e)).toBeTruthy();
                    }
                });

                it('Fails when an object is used', async () => {
                    const invalidDate: IFormidableDateProps = factory.buildField(
                        {
                            value: { blah: 5 } as any
                        }
                    );
                    try {
                        await transformAndValidate(FormidableDate, invalidDate);
                    } catch (e) {
                        expect(e).toBeInstanceOf(Array);
                        expect(errorArrayHas('value', e)).toBeTruthy();
                    }
                });

                it('Fails when an array is used', async () => {
                    const invalidDate: IFormidableDateProps = factory.buildField(
                        {
                            value: [1, 2, 3, 45, 5, 6] as any
                        }
                    );
                    try {
                        await transformAndValidate(FormidableDate, invalidDate);
                    } catch (e) {
                        expect(e).toBeInstanceOf(Array);
                        expect(errorArrayHas('value', e)).toBeTruthy();
                    }
                });
            });
        });
    });
});
