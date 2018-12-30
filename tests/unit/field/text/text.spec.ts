/**
 * Number implementation of a Formidable Field test suite
 */
// import { IFormidableNumberProps } from '@/models/Formidable/Field/FormidableNumber';
import { transformAndValidate } from 'class-transformer-validator';
import { FieldType } from '@/models/Formidable/Field/field.abstract';
import runFieldTests, { errorArrayHas } from '../field.abstract';
import { FormidableText, IFormidableTextProps } from '@/models/Formidable/Field/FormidableText';
import textFieldComponentTests from './text.spec.component';

describe('Formidable Text field', () => {

	describe('Core Field Tests', () => {
		runFieldTests(FormidableText);
		// tslint:disable-next-line:no-unused-expression
		textFieldComponentTests;
	});

	describe('Initialization & Validation', () => {

		describe('Props', () => {

			describe('fieldType', () => {
				xit('Only allows the text FieldType', async () => {
					try {
						await transformAndValidate(FormidableText, {fieldfieldType: FieldType.Number });
						fail(`Should have failed on an invalid Field Type ${FieldType.Number}`);
					} catch (e) {
						expect(errorArrayHas('fieldType', e)).toBeTruthy();
					}
					Object.keys(FieldType).map(async (val) => {
						try {
							await transformAndValidate(FormidableText, {fieldfieldType: val });
							fail(`Should have failed on an invalid Field Type ${val}`);
						} catch (e) {
							expect(errorArrayHas('fieldType', e)).toBeTruthy();
						}
					});
				});
			});

			describe('value', () => {

				it('Can initialize a FormidableText with valid basic props and a null value', async () => {
					const validText: IFormidableTextProps = {
						fieldType: FieldType.Text,
						value: null
					};
					await transformAndValidate(FormidableText, validText);
				});

				it('Can initialize a FormidableText with valid basic props and a string value', async () => {
					const validText: IFormidableTextProps = {
						fieldType: FieldType.Text,
						value: 'Some string value'
					};
					await transformAndValidate(FormidableText, validText);
				});

				it('Fails when a number is used', async () => {
					const invalidText: IFormidableTextProps = {
						fieldType: FieldType.Text,
						value: 5 as any
					};
					try {
						await transformAndValidate(FormidableText, invalidText);
						fail(`Did not fail on a numeric value for a text field`);
					} catch (e) {
						expect(e).toBeInstanceOf(Array);
						expect(errorArrayHas('value', e)).toBeTruthy();
					}
				});

				it('Fails when an object is used', async () => {
					const invalidText: IFormidableTextProps = {
						fieldType: FieldType.Text,
						value: { blah: 5 } as any
					};
					try {
						await transformAndValidate(FormidableText, invalidText);
					} catch (e) {
						expect(e).toBeInstanceOf(Array);
						expect(errorArrayHas('value', e)).toBeTruthy();
					}
				});

				it('Fails when an array is used', async () => {
					const invalidText: IFormidableTextProps = {
						fieldType: FieldType.Text,
						value: [1, 2, 3, 45, 5, 6] as any
					};
					try {
						await transformAndValidate(FormidableText, invalidText);
					} catch (e) {
						expect(e).toBeInstanceOf(Array);
						expect(errorArrayHas('value', e)).toBeTruthy();
					}
				});

				it('Fails when a Date is used', async () => {
					const invalidText: IFormidableTextProps = {
						fieldType: FieldType.Text,
						value: new Date() as any
					};
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
					const validPayloads: IFormidableTextProps[] = [
						{
							fieldType: FieldType.Text,
							value: null
						},
						{
							fieldType: FieldType.Text,
							value: null,
							maxLength: 10
						},
						{
							fieldType: FieldType.Text,
							value: null,
							minLength: 1
						},
						{
							fieldType: FieldType.Text,
							value: null,
							minLength: 1,
							maxLength: 10
						}
					];

					Promise.all(validPayloads.map((val) => {
						transformAndValidate(FormidableText, val);
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
								fieldType: FieldType.Text,
								value: null,
								minLength: 'some string'
							}
						},
						{
							it: 'fails on a boolean',
							data: {
								fieldType: FieldType.Text,
								value: null,
								minLength: true
							}
						},
						{
							it: 'fails on an object',
							data: {
								fieldType: FieldType.Text,
								value: null,
								minLength: {}
							}
						}
					];

					// tslint:disable-next-line:forin
					invalidMinLength.forEach((minLengthConfig) => {
						it(minLengthConfig.it, async () => {
							try {
								await transformAndValidate(FormidableText, minLengthConfig.data);
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
								fieldType: FieldType.Text,
								value: null,
								maxLength: 'some string'
							}
						},
						{
							it: 'fails on a boolean',
							data: {
								fieldType: FieldType.Text,
								value: null,
								maxLength: true
							}
						},
						{
							it: 'fails on an object',
							data: {
								fieldType: FieldType.Text,
								value: null,
								maxLength: {}
							}
						}
					];

					// tslint:disable-next-line:forin
					invalidMaxLength.forEach((maxLengthConfig) => {
						it(maxLengthConfig.it, async () => {
							try {
								await transformAndValidate(FormidableText, maxLengthConfig.data);
								fail(`Did not raise an error with maxLength ${maxLengthConfig.data.maxLength}`);
							} catch (e) {
								expect(errorArrayHas('maxLength', e)).toBeTruthy();
							}
						});
					});

				});

				it('fails when value is less than the provided minLength', async () => {
					try {
						const result = await transformAndValidate(FormidableText, {
							fieldType: FieldType.Text,
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
						const result = await transformAndValidate(FormidableText, {
							fieldType: FieldType.Text,
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
