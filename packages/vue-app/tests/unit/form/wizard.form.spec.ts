/**
 * Formidable Wizard Form tests
 */
import { FormidableWizardForm } from '@/models/Formidable/Form/FormidableWizardForm';
import runFormTests from '@/../tests/unit/form/form.abstract';

describe('Formidable Wizard Form', () => {
    describe('Passes Formidable Form Core tests', () => {
        runFormTests(FormidableWizardForm);
    });
});
