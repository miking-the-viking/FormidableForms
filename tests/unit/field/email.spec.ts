/**
 * Email implementation of a Formidable Field test suite
 */
// import { IFormidableEmailProps } from '@/models/Formidable/Field/FormidableEmail';
import { transformAndValidate } from 'class-transformer-validator';
import { FieldType } from '@/models/Formidable/Field/field.abstract';
import runFieldTests, { errorArrayHas } from './field.abstract';
import { FormidableEmail, IFormidableEmailProps } from '@/models/Formidable/Field/FormidableEmail';

describe('Formidable Email field', () => {

	describe('Core Field Tests', () => {
		runFieldTests(FormidableEmail);
	});

	describe('Initialization & Validation', () => {

		describe('Props', () => {

			// describe('type', () => {
			// 	it('Only allows the Email FieldType', async () => {
			// 		for (const type in FieldType) {
			// 			if (FieldType[type] !== FieldType.Email) {
			// 				try {
			// 					await transformAndValidate(FormidableEmail, { type: FieldType[type] });
			// 					fail(`Should have failed on an invalid Field Type ${FieldType[type]}`);
			// 				} catch (e) {
			// 					expect(errorArrayHas('type', e)).toBeTruthy();
			// 				}
			// 			}
			// 		}
			// 	});
			// });

			describe('value', () => {

				it('Can initialize a FormidableEmail with valid basic props and a null value', async () => {
					const validEmail: IFormidableEmailProps = {
						type: FieldType.Email,
						value: null
					};
					await transformAndValidate(FormidableEmail, validEmail);
				});

				it('Can initialize a FormidableEmail with valid basic props and an email string value', async () => {
					const validEmail: IFormidableEmailProps = {
						type: FieldType.Email,
						value: 'someemail@gmail.com'
					};
					await transformAndValidate(FormidableEmail, validEmail);
				});

				it('Fails when a non-email string is used', async () => {
					const invalidEmail: IFormidableEmailProps = {
						type: FieldType.Email,
						value: 'not a damn email'
					};
					try {
						await transformAndValidate(FormidableEmail, invalidEmail);
						fail(`Did not fail on a numeric value for a Email field`);
					} catch (e) {
						expect(e).toBeInstanceOf(Array);
						expect(errorArrayHas('value', e)).toBeTruthy();
					}
				});

				it('Fails when an object is used', async () => {
					const invalidEmail: IFormidableEmailProps = {
						type: FieldType.Email,
						value: { blah: 5 }
					};
					try {
						await transformAndValidate(FormidableEmail, invalidEmail);
					} catch (e) {
						expect(e).toBeInstanceOf(Array);
						expect(errorArrayHas('value', e)).toBeTruthy();
					}
				});

				it('Fails when an array is used', async () => {
					const invalidEmail: IFormidableEmailProps = {
						type: FieldType.Email,
						value: [1, 2, 3, 45, 5, 6]
					};
					try {
						await transformAndValidate(FormidableEmail, invalidEmail);
					} catch (e) {
						expect(e).toBeInstanceOf(Array);
						expect(errorArrayHas('value', e)).toBeTruthy();
					}
				});

				it('Fails when a Date is used', async () => {
					const invalidEmail: IFormidableEmailProps = {
						type: FieldType.Email,
						value: new Date()
					};
					try {
						await transformAndValidate(FormidableEmail, invalidEmail);
					} catch (e) {
						expect(e).toBeInstanceOf(Array);
						expect(errorArrayHas('value', e)).toBeTruthy();
					}
				});
			});

			describe('min and max length restrictions', () => {

				it('are optional', async () => {
					const validPayloads: IFormidableEmailProps[] = [
						{
							type: FieldType.Email,
							value: null
						},
						{
							type: FieldType.Email,
							value: null,
							maxLength: 10
						},
						{
							type: FieldType.Email,
							value: null,
							minLength: 1
						},
						{
							type: FieldType.Email,
							value: null,
							minLength: 1,
							maxLength: 10
						}
					];

					Promise.all(validPayloads.map((val) => {
						transformAndValidate(FormidableEmail, val);
					})).catch((e) => {
						expect(!errorArrayHas('minLength', e)).toBeTruthy();
						expect(!errorArrayHas('maxLength', e)).toBeTruthy();
					});
				});

				describe('fails on non-numeric minLength or maxLength', () => {
					const invalidMinLength = [
						{
							it: 'fails on a string',
							data: {
								type: FieldType.Email,
								value: null,
								minLength: 'some string'
							}
						},
						{
							it: 'fails on a boolean',
							data: {
								type: FieldType.Email,
								value: null,
								minLength: true
							}
						},
						{
							it: 'fails on an object',
							data: {
								type: FieldType.Email,
								value: null,
								minLength: {}
							}
						}
					];

					// tslint:disable-next-line:forin
					invalidMinLength.forEach((minLengthConfig) => {
						it(minLengthConfig.it, async () => {
							try {
								await transformAndValidate(FormidableEmail, minLengthConfig.data);
								fail(`Did not raise an error with min length ${minLengthConfig.data.minLength}`);
							} catch (e) {
								expect(errorArrayHas('minLength', e)).toBeTruthy();
							}
						});
					});

					const invalidMaxLength = [
						{
							it: 'fails on a string',
							data: {
								type: FieldType.Email,
								value: null,
								maxLength: 'some string'
							}
						},
						{
							it: 'fails on a boolean',
							data: {
								type: FieldType.Email,
								value: null,
								maxLength: true
							}
						},
						{
							it: 'fails on an object',
							data: {
								type: FieldType.Email,
								value: null,
								maxLength: {}
							}
						}
					];

					// tslint:disable-next-line:forin
					invalidMaxLength.forEach((maxLengthConfig) => {
						it(maxLengthConfig.it, async () => {
							try {
								await transformAndValidate(FormidableEmail, maxLengthConfig.data);
								fail(`Did not raise an error with maxLength ${maxLengthConfig.data.maxLength}`);
							} catch (e) {
								expect(errorArrayHas('maxLength', e)).toBeTruthy();
							}
						});
					});

				});

				it('fails when value is less than the provided minLength', async () => {
					try {
						const result = await transformAndValidate(FormidableEmail, {
							type: FieldType.Email,
							value: 'a',
							minLength: 2
						});
						fail(`should have failed with a value whose length is less than the specified minLength`);
					} catch (e) {
						expect(e).toBeInstanceOf(Array);
						expect(errorArrayHas('value', e)).toBeTruthy();
					}
				});


				it('fails when value is greater than the provided maxLength', async () => {
					try {
						const result = await transformAndValidate(FormidableEmail, {
							type: FieldType.Email,
							value: 'abbv',
							maxLength: 2
						});
						fail(`should have failed with a value whose length is greater than the specified maxLength`);
					} catch (e) {
						expect(e).toBeInstanceOf(Array);
						expect(errorArrayHas('value', e)).toBeTruthy();
					}
				});
			});
		});
	});

});
