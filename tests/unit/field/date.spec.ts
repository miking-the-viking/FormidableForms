/**
 * Date implementation of a Formidable Field test suite
 */
// import { IFormidableDateProps } from '@/models/Formidable/Field/FormidableDate';
import { transformAndValidate } from 'class-transformer-validator';
import { FieldType } from '@/models/Formidable/Field/field.abstract';
import runFieldTests, { errorArrayHas } from './field.abstract';
import { FormidableDate, IFormidableDateProps, DateType } from '@/models/Formidable/Field/FormidableDate';

describe('Formidable Date field', () => {

	describe('Core Field Tests', () => {
		runFieldTests(FormidableDate);
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
					const validDate: IFormidableDateProps = {
						fieldType: FieldType.Date,
						value: null,
						dateType: DateType.Datetime
					};
					await transformAndValidate(FormidableDate, validDate);
				});

				it('Can initialize a FormidableDate with valid basic props and a Date string value', async () => {
					const validDate: IFormidableDateProps = {
						fieldType: FieldType.Date,
						value: new Date().toISOString(),
						dateType: DateType.Datetime
					};
					await transformAndValidate(FormidableDate, validDate);
				});

				it('Fails when just a number is used', async () => {
					const invalidDate: IFormidableDateProps = {
						fieldType: FieldType.Date,
						value: 1337 as any,
						dateType: DateType.Datetime
					};
					try {
						await transformAndValidate(FormidableDate, invalidDate);
						fail(`Did not fail on a numeric value for a Date field`);
					} catch (e) {
						expect(e).toBeInstanceOf(Array);
						expect(errorArrayHas('value', e)).toBeTruthy();
					}
				});

				it('Fails when a non-Date string is used', async () => {
					const invalidDate: IFormidableDateProps = {
						fieldType: FieldType.Date,
						value: 'not a damn Date',
						dateType: DateType.Datetime
					};
					try {
						await transformAndValidate(FormidableDate, invalidDate);
						fail(`Did not fail on a numeric value for a Date field`);
					} catch (e) {
						expect(e).toBeInstanceOf(Array);
						expect(errorArrayHas('value', e)).toBeTruthy();
					}
				});

				it('Fails when an object is used', async () => {
					const invalidDate: IFormidableDateProps = {
						fieldType: FieldType.Date,
						value: { blah: 5 } as any,
						dateType: DateType.Datetime
					};
					try {
						await transformAndValidate(FormidableDate, invalidDate);
					} catch (e) {
						expect(e).toBeInstanceOf(Array);
						expect(errorArrayHas('value', e)).toBeTruthy();
					}
				});

				it('Fails when an array is used', async () => {
					const invalidDate: IFormidableDateProps = {
						fieldType: FieldType.Date,
						value: [1, 2, 3, 45, 5, 6] as any,
						dateType: DateType.Datetime
					};
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
