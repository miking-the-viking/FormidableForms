import FormFactory from '@/models/Formidable/Form/Form.factory';
import { FormidableBasicForm } from '@/models/Formidable/Form/FormidableBasicForm';
import { FormType } from '@/models/Formidable/Form/form.abstract';
import FormMixin, { FormTypes } from './Form.mixin';
import { FieldType } from '@/models/Formidable/Field/field.abstract';

interface TestScenarios {
    valid: { [key: string]: FormTypes };
    invalid: any;
}

const BASIC_FORM_CONFIGS: TestScenarios = {
    valid: {
        empty: FormFactory.generate(FormType.Basic),
        minimal: FormFactory.generate(FormType.Basic, {
            fields: [
                {
                    fieldType: FieldType.Number,
                    value: 5
                }
            ]
        })
    },
    invalid: {
        nonExistantType: FormFactory.generate(FormType.Basic, {
            formType: 'lol' as FormType.Basic
        })
    }
};

describe('Formidable Form Mixin', () => {
    describe('Basic Form initialization', () => {
        it(
            `Initializes with an empty fields array
        (I don't know why I allow that case... pointless form scenarios.` +
                ` May for down the line in a drag and drop editor?? 🤔)`,
            async () => {
                const f = new FormMixin({
                    propsData: {
                        form: BASIC_FORM_CONFIGS.valid.empty
                    }
                });

                expect(f).toBeInstanceOf(FormMixin);
                expect(f.formCtor()).toBe(FormidableBasicForm);
            }
        );

        it('Initializes with a basic, minimal, valid field array', () => {
            const f = new FormMixin({
                propsData: {
                    form: BASIC_FORM_CONFIGS.valid.minimal
                }
            });

            expect(f).toBeInstanceOf(FormMixin);
            expect(f.formCtor()).toBe(FormidableBasicForm);
            expect(f.isValid).toBeTruthy();
        });
    });

    it(`Basic Form Mixin throws an error when trying to return the formCtor with an invalid fieldType`, async () => {
        const form = new FormMixin({
            propsData: {
                form: BASIC_FORM_CONFIGS.invalid.nonExistantType
            }
        });

        try {
            form.formCtor();
            fail('Shold have failed trying to access the form constructor of a invalid fieldType');
        } catch (e) {
            expect(e).toBeInstanceOf(Error);
            expect(e.message).toBe('Unknown form type: lol');
        }
    });
});
