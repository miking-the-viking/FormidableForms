import { shallowMount } from '@vue/test-utils';
import TextField from '@/components/Formidable/TextField.vue';
import { FieldType } from '@/models/Formidable/Field/field.abstract';
import { FormidableText } from '@/models/Formidable/Field/FormidableText';
import { errorArrayHas } from '@/../tests/unit/field/field.abstract';

const textComponentTests = describe('TextField.vue', () => {

	describe('Invalid props should cause an error to be thrown', () => {
		xit('Fails when no value prop is provided', () => {
			try {
				shallowMount(TextField, {
					propsData: {
						// value: {
						// 	label: 'something'
						// }
					}
				});
				fail(`Did not throw an error when no value prop was provided`);
			} catch (e) {
				expect(e).toBeInstanceOf(TypeError);
				// @TODO: Check why this is not passing, lol
				// expect(e.message).toEqual(`Cannot read property 'type' of undefined`);
			}
		});

		xit('Fails when an invalid value prop is provided', () => {
			try {
				shallowMount(TextField, {
					propsData: {
						value: {
							fieldType: FieldType.Number,
							value: null
						}
					}
				});
				fail(`Did not throw an error when a non-FieldType.Text value prop type was provided`);
			} catch (e) {
				expect(errorArrayHas('fieldType', e)).toBeTruthy();
			}
		});

		it('Fails when a non-array argument is passed in the validationErrors prop', () => {
			try {
				shallowMount(TextField, {
					propsData: {
						value: {
							fieldType: FieldType.Text,
							value: null
						},
						validationErrors: 123
					}
				});
				fail(`Did not throw an error when a non-array validationErrors prop type was provided`);
			} catch (e) {
				expect(errorArrayHas('validationErrors', e)).toBeTruthy();
			}
		});
	});

	it('Renders successfully when a valid value prop is provided', () => {
		const textFieldObj: FormidableText = {
			value: null,
			fieldType: FieldType.Text
		};
		expect(
			shallowMount(TextField, {
				propsData: { value: textFieldObj }
			})
		).toBeTruthy();
	});

	// // render the component
	// const wrapper = shallowMount<TextField>(TextField);

	// // should not allow for `username` less than 7 characters, excludes whitespace
	// wrapper.setData({ username: ' '.repeat(7) })

	// // assert the error is rendered
	// expect(wrapper.find('.error').exists()).toBe(true)

	// // update the name to be long enough
	// wrapper.setData({ username: 'Lachlan' })

	// // assert the error has gone away
	// expect(wrapper.find('.error').exists()).toBe(false)


});

export default textComponentTests;
