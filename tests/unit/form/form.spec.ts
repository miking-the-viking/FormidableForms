import { FormidableForm } from '@/models/Formidable/Form/form.abstract';

import { FormidableWizardForm } from '@/models/Formidable/Form/FormidableWizardForm';
import { FormidableBasicForm } from '@/models/Formidable/Form/FormidableBasicForm';
import { FieldType } from '@/models/Formidable/Field/field.abstract';

const runFormTests = <T extends FormidableForm>(ctor: new(...args: any[]) => FormidableForm) => {
    describe(`Formidable Forms Core Test for ${ctor.name} Implementation`, () => {

        describe('Form initialization', () => {

            const existingFields = [{
                type: FieldType.Number,
                value: 1
            }];

            it('can be initialized without any existing fields defaulting to an empty array', () => {
                const form = new ctor();
                expect(form).toBeInstanceOf(FormidableForm);
                expect(form.fields).toBeDefined();
                expect(form.fields).toHaveLength(0);
            });

            it('can be initialized with an empty set of existing fields', () => {
                const form = new ctor([]);
                expect(form).toBeInstanceOf(FormidableForm);
                expect(form.fields).toBeDefined();
                expect(form.fields).toHaveLength(0);
            });

            it('can be initialized with an array of existing fields', () => {
                const form = new ctor(existingFields);
                expect(form).toBeInstanceOf(FormidableForm);
                expect(form.fields).toBeDefined();
                expect(form.fields).toHaveLength(1);
                expect(form.fields[0].value).toEqual(existingFields[0].value);
            });

        });
    });
};

runFormTests(FormidableBasicForm);
runFormTests(FormidableWizardForm);
