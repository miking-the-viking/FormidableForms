/**
 * Abstract tests defining consistent core Formidable Form behaviour
 */

import { FormidableForm } from '@/models/Formidable/Form/form.abstract';
import { FieldType, FormidableField } from '@/models/Formidable/Field/field.abstract';
import { errorArrayHas } from '../field/field.abstract';
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';
import { FormidableNumber } from '@/models/Formidable/Field/FormidableNumber';
import { FormidableText } from '@/models/Formidable/Field/FormidableText';

export default <T extends FormidableForm>(
	ctor: new(...args: any[]) => T
) => {
	describe(`Formidable Forms Core Test for ${ctor.name} Implementation`, () => {

		describe('Form Validation', () => {
			it('Fails when no fields argument is provided or invalid', async () => {
				const form = plainToClass(ctor, {});
				const errs = await validate(form);
				if (errs.length === 0) {
					fail('Did not throw an error when no fields propery were provided to the form');
				}
				expect(errs).toBeInstanceOf(Array);
				expect(errorArrayHas('fields', errs)).toBeTruthy();
				// try {
				// 	await transformAndValidate(ctor, {});
				// 	fail(`Did not throw a validator error when not providing any fields`);
				// } catch (e) {
				// 	expect(e).toBeInstanceOf(Array);
				// 	expect(errorArrayHas('fields', e)).toBeTruthy();
				// }
			});

			it('Fails when there is an evident validation error', async () => {
				const invalidFields: FormidableForm = {
						fields: [
							{
								type: FieldType.Number,
								value: -50,
								minimum: -20,
								label: 'Any number >= -20'
							}
						]
				};

				const form = plainToClass(ctor, invalidFields);
				const errs = await validate(form);
				if (errs.length === 0) {
					fail(`Did not throw an error on an invalid number field value.`);
				}
				expect(errs).toBeInstanceOf(Array);
				expect(errorArrayHas('fields', errs)).toBeTruthy();
				// try {
				// 	await transformAndValidate(ctor, invalidFields);
				// 	fail(`Did not throw an error on an invalid number field value.`);
				// } catch (e) {
				// 	expect(e).toBeInstanceOf(Array);
				// 	expect(errorArrayHas('fields', e)).toBeTruthy();
				// }
			});

			it('Fails when a field value is invalid', async () => {
				// const invalidFields: Array<FormidableField<number>> = [
				const invalidFields: Array<FormidableField<any>> = [
					{
						type: FieldType.Number,
						// tslint:disable-next-line
						value: 'some string'
					}
				];

				const form = plainToClass(ctor, {
					fields: invalidFields
				});
				const errs = await validate(form);
				if (errs.length === 0) {
					fail('There should have been an error for an evidently invalid field value');
				}
				expect(errs).toBeInstanceOf(Array);
				expect(errorArrayHas('fields', errs)).toBeTruthy();

				// try {
				// 	await transformAndValidate(ctor, {
				// 		fields: invalidFields
				// 	});
				// 	fail(`Did not throw a validator error when the number field had a string value`);
				// } catch (e) {
				// 	expect(e).toBeInstanceOf(Array);
				// 	expect(errorArrayHas('fields', e)).toBeTruthy();
				// }
			});
		});

		describe('Form initialization', () => {

			const existingFields: Array<FormidableNumber | FormidableText> = [{
				type: FieldType.Number,
				value: 1
			}];

			const formObj = {
				fields: existingFields
			};

			it('can be initialized with an array of existing fields', async () => {
				// const form = await transformAndValidate(ctor, formObj);
				const form = plainToClass(ctor, formObj);
				const errs = await validate(form);
				if (errs.length > 0) {
					throw errs;
				}
				expect(form).toBeInstanceOf(FormidableForm);
				expect(form.fields).toBeDefined();
				expect(form.fields).toHaveLength(1);
				expect(form.fields[0].value).toEqual(existingFields[0].value);
			});

		});
	});
};
