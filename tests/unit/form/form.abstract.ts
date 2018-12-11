/**
 * Abstract tests defining consistent core Formidable Form behaviour
 */

import { FormidableForm } from '@/models/Formidable/Form/form.abstract';
import { FieldType, FormidableField } from '@/models/Formidable/Field/field.abstract';
import { transformAndValidate } from 'class-transformer-validator';
import { errorArrayHas } from '../field/field.abstract';

export default <T extends FormidableForm<T>>(ctor: new(...args: any[]) => FormidableForm<T>) => {
	describe(`Formidable Forms Core Test for ${ctor.name} Implementation`, () => {

		describe('Form Validation', () => {
			it('Fails when no fields argument is provided or invalid', async () => {
				try {
					await transformAndValidate(ctor, {});
					fail(`Did not throw a validator error when not providing any fields`);
				} catch (e) {
					expect(e).toBeInstanceOf(Array);
					expect(errorArrayHas('fields', e)).toBeTruthy();
				}
			});

			// it('Fails when a field value is invalid', async () => {
			// 	// const invalidFields: Array<FormidableField<number>> = [
			// 	const invalidFields: Array<FormidableField<any>> = [
			// 		{
			// 			type: FieldType.Number,
			// 			// tslint:disable-next-line
			// 			value: 'some string'
			// 		}
			// 	];
			// 	try {
			// 		await transformAndValidate(ctor, {
			// 			fields: invalidFields
			// 		});
			// 		fail(`Did not throw a validator error when the number field had a string value`);
			// 	} catch (e) {
			// 		expect(e).toBeInstanceOf(Array);
			// 		expect(errorArrayHas('fields', e)).toBeTruthy();
			// 	}
			// });
		});

		describe('Form initialization', () => {

			const existingFields: Array<FormidableField<number>> = [{
				type: FieldType.Number,
				value: 1
			}];

			it('can be initialized with an array of existing fields', async () => {
				const form = await transformAndValidate(ctor, {fields: existingFields});
				expect(form).toBeInstanceOf(FormidableForm);
				expect(form.fields).toBeDefined();
				expect(form.fields).toHaveLength(1);
				expect(form.fields[0].value).toEqual(existingFields[0].value);
			});

		});
	});
};
