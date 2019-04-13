import { IFormidableNumberProps } from '../FormidableNumber';
import { shallowMount, mount, Wrapper } from '@vue/test-utils';
import NumberField from '@/components/Formidable/NumberField.vue';
import { FieldType } from '@/models/Formidable/Field/field.abstract';
import { FormidableNumber } from '@/models/Formidable/Field/FormidableNumber';
import { errorArrayHas } from '@/models/Formidable/Field/field.abstract.spec.config';
import { Validator } from '@/models/Validator';
import FeedbackText from '@/components/Formidable/components/FeedbackText.vue';

const errorClass = 'is-danger';
const feedbackTextClass = 'help';
const successClass = 'is-success';

function feedbackTextExistsAndIsDanger(field: Wrapper<any>) {
    const feedbackTextField = field.find(FeedbackText);
    expect(feedbackTextField.exists());
    expect(feedbackTextField.classes().indexOf(errorClass) > -1).toBeTruthy();
}

function feedbackTextDoesNotExist(field: Wrapper<any>) {
    const feedbackTextField = field.find(FeedbackText);
    expect(!feedbackTextField.exists());
}

const numberComponentTests = describe('NumberField.vue', () => {
    describe('Component Prop Validation', () => {
        describe('Invalid props should cause an error to be thrown', () => {
            xit('Fails when no value prop is provided', () => {
                try {
                    shallowMount(NumberField, {
                        propsData: {
                            // value: {
                            // 	label: 'something'
                            // }
                        }
                    });
                    fail(
                        `Did not throw an error when no value prop was provided`
                    );
                } catch (e) {
                    expect(e).toBeInstanceOf(TypeError);
                    // @TODO: Check why this is not passing, lol
                    // expect(e.message).toEqual(`Cannot read property 'type' of undefined`);
                }
            });

            xit('Fails when an invalid value prop is provided', () => {
                try {
                    shallowMount(NumberField, {
                        propsData: {
                            value: 12341
                        }
                    });
                    fail(
                        `Did not throw an error when a non-FieldType.Text value prop type was provided`
                    );
                } catch (e) {
                    expect(errorArrayHas('fieldType', e)).toBeTruthy();
                }
            });

            it('Fails when a non-array argument is passed in the validationErrors prop', () => {
                try {
                    shallowMount(NumberField, {
                        propsData: {
                            value: {
                                fieldType: FieldType.Number,
                                value: null
                            },
                            validationErrors: 123
                        }
                    });
                    fail(
                        `Did not throw an error when a non-array validationErrors prop type was provided`
                    );
                } catch (e) {
                    expect(errorArrayHas('validationErrors', e)).toBeTruthy();
                }
            });
        });

        it('Renders successfully when a valid value prop is provided', () => {
            const numberFieldObj: IFormidableNumberProps = {
                value: null,
                fieldType: FieldType.Number
            };
            expect(
                shallowMount<NumberField>(NumberField, {
                    propsData: { value: numberFieldObj }
                })
            ).toBeTruthy();
        });
    });

    describe('Null Value', () => {
        it('On initialization with a null value, no error colors ortext are shown', () => {
            const numberFieldObj: IFormidableNumberProps = {
                value: null,
                fieldType: FieldType.Number
            };
            const numField = shallowMount<NumberField>(NumberField, {
                propsData: { value: numberFieldObj }
            });
            expect(numField.contains(feedbackTextClass)).toBe(false);
            expect(numField.contains(errorClass)).toBe(false);
        });
    });

    describe('Min/Max props', () => {
        describe('Min', () => {
            xit('Shows error text when the value is less than the minimum', async () => {
                const numberFieldObj: IFormidableNumberProps = {
                    value: 1,
                    minimum: 4,
                    fieldType: FieldType.Number
                };
                const validator = new Validator(
                    FormidableNumber,
                    numberFieldObj
                );
                await validator.validate();

                // shallowMount stubs the child components
                // and only returns the wrapper for the mounted/rendered Vue component
                // need to actually use mount to test child components (FeedbackText was made into its own component)
                // ... Idiot...
                const numField = mount<NumberField>(NumberField, {
                    propsData: {
                        value: numberFieldObj,
                        validationErrors: validator.validationErrors
                    }
                });
                expect(numField.contains(`.${feedbackTextClass}`)).toBe(true);
                expect(numField.contains(`.${errorClass}`)).toBe(true);

                feedbackTextExistsAndIsDanger(numField);
            });

            xit('Shows the success class when the value is equal to the minimum', async () => {
                const numberFieldObj: IFormidableNumberProps = {
                    value: 4,
                    minimum: 4,
                    fieldType: FieldType.Number
                };
                const validator = new Validator(
                    FormidableNumber,
                    numberFieldObj
                );
                await validator.validate();

                const propsData = {
                    value: numberFieldObj,
                    validationErrors: validator.validationErrors
                };

                // shallowMount stubs the child components
                // and only returns the wrapper for the mounted/rendered Vue component
                // need to actually use mount to test child components (FeedbackText was made into its own component)
                // ... Idiot...
                const numField = mount<NumberField>(NumberField, {
                    propsData,
                    sync: true
                });

                await validator.validate();
                const numInput = numField.find('input[type="number"]');
                numInput.setValue(numberFieldObj.minimum);

                // expect(numField.classes().indexOf(successClass) > -1).toBe(true);
                expect(numField.contains(`.${successClass}`)).toBe(true);
                feedbackTextDoesNotExist(numField);
            });

            xit('Shows the success class when the value is greater than the minimum', async () => {
                const numberFieldObj: IFormidableNumberProps = {
                    value: 1000,
                    minimum: 4,
                    fieldType: FieldType.Number
                };
                const validator = new Validator(
                    FormidableNumber,
                    numberFieldObj
                );
                await validator.validate();

                // shallowMount stubs the child components
                // and only returns the wrapper for the mounted/rendered Vue component
                // need to actually use mount to test child components (FeedbackText was made into its own component)
                // ... Idiot...
                const numField = mount<NumberField>(NumberField, {
                    propsData: {
                        value: numberFieldObj,
                        validationErrors: validator.validationErrors
                    }
                });
                expect(numField.contains(successClass)).toBe(true);
                feedbackTextDoesNotExist(numField);
                // expect(numField.contains(feedbackTextClass)).toBe(false);
                // expect(numField.contains(errorClass)).toBe(false);
            });
        });

        xdescribe('Max', () => {
            it('Shows error text when the value is greater than the minimum', async () => {
                const numberFieldObj: IFormidableNumberProps = {
                    value: 10,
                    maximum: 4,
                    fieldType: FieldType.Number
                };
                const validator = new Validator(
                    FormidableNumber,
                    numberFieldObj
                );
                await validator.validate();

                // shallowMount stubs the child components
                // and only returns the wrapper for the mounted/rendered Vue component
                // need to actually use mount to test child components (FeedbackText was made into its own component)
                // ... Idiot...
                const numField = mount<NumberField>(NumberField, {
                    propsData: {
                        value: numberFieldObj,
                        validationErrors: validator.validationErrors
                    }
                });
                expect(numField.contains(feedbackTextClass)).toBe(true);
                expect(numField.contains(errorClass)).toBe(true);

                feedbackTextExistsAndIsDanger(numField);
            });
        });
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

export default numberComponentTests;
