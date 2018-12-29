import { FormidableNumber } from '@/models/Formidable/Field/FormidableNumber';

import { FormidableField} from '@/models/Formidable/Field/field.abstract';

import { transformAndValidate } from 'class-transformer-validator';
import { ValidationError } from 'class-validator';

/**
 * reduces a ValidationError array checking for a specific type string type match
 * returns false if found, true otherwise.
 * @param type
 * @param e
 */
export function errorArrayHas(type: string, e: ValidationError[] | ValidationError): boolean {

	if (e instanceof Array) {
		return e.reduce((acc: boolean, val: ValidationError) => {
			expect(val).toBeInstanceOf(ValidationError);
			if (val.property === type) {
				return true;
			}
			return acc;
		}, false);
	}
	expect(e).toBeInstanceOf(ValidationError);
	return e.property === type;
}

export default (ctor: new (...args: any[]) => FormidableField<any>) => {
	describe(`Formidable Form Field Core Test for ${ctor.name} Implementation`, () => {

		describe('Field Initialization', () => {

			// describe('Field Type Prop', () => {
			// 	it('throws an error when an invalid FieldType is used', async () => {

			// 		const invalidType = { type: 'someInvalidType'};

			// 		try {
			// 			await transformAndValidate(ctor, invalidType);
			// 			fail(`Did not throw a validator error when using an invalid field type ${invalidType.type}`);
			// 		} catch (e) {
			// 			expect(e).toBeInstanceOf(Array);
			// 			expect(errorArrayHas('type', e)).toBeTruthy();
			// 		}
			// 	});

			// });

			describe('Name Prop', () => {
				describe('Errors are thrown when an invalid name prop is used', () => {
					it('number', async () => {
						const invalidName = { name: -1 };

						try {
							await transformAndValidate(ctor, invalidName);
							fail(`Did not throw a validator error when using an invalid name prop ${invalidName.name}`);
						} catch (e) {
							expect(e).toBeInstanceOf(Array);
							expect(errorArrayHas('name', e)).toBeTruthy();
						}
					});

					it('boolean', async () => {
						const invalidName = { name: false };

						try {
							await transformAndValidate(ctor, invalidName);
							fail(`Did not throw a validator error when using an invalid name prop ${invalidName.name}`);
						} catch (e) {
							expect(e).toBeInstanceOf(Array);
							expect(errorArrayHas('name', e)).toBeTruthy();
						}
					});

					it('object', async () => {
						const invalidName = { name: {} };

						try {
							await transformAndValidate(ctor, invalidName);
							fail(`Did not throw a validator error when using an invalid name prop ${invalidName.name}`);
						} catch (e) {
							expect(e).toBeInstanceOf(Array);
							expect(errorArrayHas('name', e)).toBeTruthy();
						}
					});
				});

				it('Accepts a string name', async () => {
					const validName = { name: 'test' };

					try {
						await transformAndValidate(ctor, validName);
					} catch (e) {
						expect(e).toBeInstanceOf(Array);
						expect(!errorArrayHas('name', e)).toBeTruthy();
					}
				});
			});

			describe('Label Prop', () => {
				describe('Errors are thrown when an invalid label prop is used', () => {
					it('number', async () => {
						const invalidLabel = { label: -1 };

						try {
							await transformAndValidate(ctor, invalidLabel);
							// tslint:disable-next-line:max-line-length
							fail(`Did not throw a validator error when using an invalid label prop ${invalidLabel.label}`);
						} catch (e) {
							expect(e).toBeInstanceOf(Array);
							expect(errorArrayHas('label', e)).toBeTruthy();
						}
					});

					it('boolean', async () => {
						const invalidLabel = { label: false };

						try {
							await transformAndValidate(ctor, invalidLabel);
							// tslint:disable-next-line:max-line-length
							fail(`Did not throw a validator error when using an invalid label prop ${invalidLabel.label}`);
						} catch (e) {
							expect(e).toBeInstanceOf(Array);
							expect(errorArrayHas('label', e)).toBeTruthy();
						}
					});

					it('object', async () => {
						const invalidLabel = { label: {} };

						try {
							await transformAndValidate(ctor, invalidLabel);
							fail(`Did not throw a validator error` +
							`when using an invalid label prop ${invalidLabel.label}`);
						} catch (e) {
							expect(e).toBeInstanceOf(Array);
							expect(errorArrayHas('label', e)).toBeTruthy();
						}
					});
				});

				it('Accepts a string label', async () => {
					const validLabel = { label: 'test' };

					try {
						await transformAndValidate(ctor, validLabel);
					} catch (e) {
						expect(e).toBeInstanceOf(Array);
						expect(!errorArrayHas('label', e)).toBeTruthy();
					}
				});
			});

			describe('Required Prop', () => {
				it('is optional', async () => {
					try {
						await transformAndValidate(ctor, {});
					} catch (e) {
						expect(e).toBeInstanceOf(Array);
						expect(!errorArrayHas('required', e)).toBeTruthy();
					}
				});

				it('accepts a boolean', async () => {
					try {
						await transformAndValidate(ctor, { required: true });
					} catch (e) {
						expect(e).toBeInstanceOf(Array);
						expect(!errorArrayHas('required', e)).toBeTruthy();
					}
					try {
						await transformAndValidate(ctor, { required: false });
					} catch (e) {
						expect(e).toBeInstanceOf(Array);
						expect(!errorArrayHas('required', e)).toBeTruthy();
					}
				});
			});
		});
	});
};
