/**
 * Password implementation of a Formidable Field test suite
 */
import { transformAndValidate } from 'class-transformer-validator';
import { FieldType } from '@/models/Formidable/Field/field.abstract';
import runFieldTests, { errorArrayHas } from './field.abstract';
import { FormidablePassword, IFormidablePasswordProps } from '@/models/Formidable/Field/FormidablePassword';

describe('Formidable Password field', () => {

	describe('Core Field Tests', () => {
		runFieldTests(FormidablePassword);
	});

	describe('Initialization & Validation', () => {

		describe('Props', () => {

			// describe('type', () => {
			// 	it('Only allows the Password FieldType', async () => {
			// 		for (const type in FieldType) {
			// 			if (FieldType[type] !== FieldType.Password) {
			// 				try {
			// 					await transformAndValidate(FormidablePassword, { type: FieldType[type] });
			// 					fail(`Should have failed on an invalid Field Type ${FieldType[type]}`);
			// 				} catch (e) {
			// 					expect(errorArrayHas('type', e)).toBeTruthy();
			// 				}
			// 			}
			// 		}
			// 	});
			// });

			describe('value', () => {

				it('Can initialize a FormidablePassword with valid basic props and a null value', async () => {
					const validPassword: IFormidablePasswordProps = {
						type: FieldType.Password,
						value: null
					};
					await transformAndValidate(FormidablePassword, validPassword);
				});

				it('Can initialize a FormidablePassword with valid basic props and an Password string value', async () => {
					const validPassword: IFormidablePasswordProps = {
						type: FieldType.Password,
						value: 'thisIsMyPassword123!'
					};
					await transformAndValidate(FormidablePassword, validPassword);
				});

				it('Fails when an object is used', async () => {
					const invalidPassword: IFormidablePasswordProps = {
						type: FieldType.Password,
						value: { blah: 5 }
					};
					try {
						await transformAndValidate(FormidablePassword, invalidPassword);
					} catch (e) {
						expect(e).toBeInstanceOf(Array);
						expect(errorArrayHas('value', e)).toBeTruthy();
					}
				});

				it('Fails when an array is used', async () => {
					const invalidPassword: IFormidablePasswordProps = {
						type: FieldType.Password,
						value: [1, 2, 3, 45, 5, 6]
					};
					try {
						await transformAndValidate(FormidablePassword, invalidPassword);
					} catch (e) {
						expect(e).toBeInstanceOf(Array);
						expect(errorArrayHas('value', e)).toBeTruthy();
					}
				});

				it('Fails when a Date is used', async () => {
					const invalidPassword: IFormidablePasswordProps = {
						type: FieldType.Password,
						value: new Date()
					};
					try {
						await transformAndValidate(FormidablePassword, invalidPassword);
					} catch (e) {
						expect(e).toBeInstanceOf(Array);
						expect(errorArrayHas('value', e)).toBeTruthy();
					}
				});
			});

			describe('min and max length restrictions', () => {

				it('are optional', async () => {
					const validPayloads: IFormidablePasswordProps[] = [
						{
							type: FieldType.Password,
							value: null
						},
						{
							type: FieldType.Password,
							value: null,
							maxLength: 10
						},
						{
							type: FieldType.Password,
							value: null,
							minLength: 1
						},
						{
							type: FieldType.Password,
							value: null,
							minLength: 1,
							maxLength: 10
						}
					];

					Promise.all(validPayloads.map((val) => {
						transformAndValidate(FormidablePassword, val);
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
								type: FieldType.Password,
								value: null,
								minLength: 'some string'
							}
						},
						{
							it: 'fails on a boolean',
							data: {
								type: FieldType.Password,
								value: null,
								minLength: true
							}
						},
						{
							it: 'fails on an object',
							data: {
								type: FieldType.Password,
								value: null,
								minLength: {}
							}
						}
					];

					// tslint:disable-next-line:forin
					invalidMinLength.forEach((minLengthConfig) => {
						it(minLengthConfig.it, async () => {
							try {
								await transformAndValidate(FormidablePassword, minLengthConfig.data);
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
								type: FieldType.Password,
								value: null,
								maxLength: 'some string'
							}
						},
						{
							it: 'fails on a boolean',
							data: {
								type: FieldType.Password,
								value: null,
								maxLength: true
							}
						},
						{
							it: 'fails on an object',
							data: {
								type: FieldType.Password,
								value: null,
								maxLength: {}
							}
						}
					];

					// tslint:disable-next-line:forin
					invalidMaxLength.forEach((maxLengthConfig) => {
						it(maxLengthConfig.it, async () => {
							try {
								await transformAndValidate(FormidablePassword, maxLengthConfig.data);
								fail(`Did not raise an error with maxLength ${maxLengthConfig.data.maxLength}`);
							} catch (e) {
								expect(errorArrayHas('maxLength', e)).toBeTruthy();
							}
						});
					});

				});

				it('fails when value is less than the provided minLength', async () => {
					try {
						const result = await transformAndValidate(FormidablePassword, {
							type: FieldType.Password,
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
						const result = await transformAndValidate(FormidablePassword, {
							type: FieldType.Password,
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