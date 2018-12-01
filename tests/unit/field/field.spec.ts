import { FormidableField } from '@/models/Formidable/Field/field.abstract';

const runFieldTests = <T extends FormidableField<T>>(ctor: new (...args: any[]) => FormidableField<T>) => {
    describe(`Formidable Form Field Core Test for ${ctor.name} Implementation`, () => {

        describe('Field Initialization', () => {

            expect(true).toBeTruthy();
        });
    });
}

// runFieldTests(FormidableBasicForm);
// runFieldTests(FormidableWizardForm);