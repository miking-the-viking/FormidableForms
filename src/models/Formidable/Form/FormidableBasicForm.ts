import { FormidableForm } from '@/models/Formidable/Form/form.abstract';
import { FormidableField } from '@/models/Formidable/Field/field.abstract';

/**
 * Formidable Basic Form
 * The Basic form is a single form
 */
export class FormidableBasicForm extends FormidableForm {

    constructor(fields?: FormidableField[]) {
        super(fields);
    }
}
