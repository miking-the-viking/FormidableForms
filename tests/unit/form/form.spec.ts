import { FormidableForm } from '@/models/Formidable/Form/form.abstract';

import { FormidableWizardForm } from '@/models/Formidable/Form/FormidableWizardForm';
import { FormidableBasicForm } from '@/models/Formidable/Form/FormidableBasicForm';

const runFormTests = <T extends FormidableForm>(ctor: new(...args: any[]) => FormidableForm) => {
    describe(`Formidable Forms Core Test for ${ctor.name} Implementation`, () => {

        describe('Form initialization', () => {

            const existingFields = [];

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

            // it('can be initialized with an array of existing fields', () => {
            //     expect(new ctor())
            // });
        });
    });
}

runFormTests(FormidableBasicForm);
runFormTests(FormidableWizardForm);
