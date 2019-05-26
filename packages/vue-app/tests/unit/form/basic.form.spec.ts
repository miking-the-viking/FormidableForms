/**
 * Formidable Basic Form Tests
 */
import runFormTests from '@/../tests/unit/form/form.abstract';
import { FormidableBasicForm } from '@/models/Formidable/Form/FormidableBasicForm';

describe('Formidable Basic Form', () => {
    describe('Passes Formidable Form Core tests', () => {
        runFormTests(FormidableBasicForm);
    });
});

