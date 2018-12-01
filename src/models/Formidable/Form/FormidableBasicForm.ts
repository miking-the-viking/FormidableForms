import { FormidableForm } from '@/models/Formidable/Form/form.abstract';
import { FormidableField } from '@/models/Formidable/Field/field.abstract';

/**
 * Formidable Basic Form
 * The Basic form is a single form
 */
export class FormidableFormBasic extends FormidableForm {

    constructor(fields?: Array<FormidableField<any>>) {
        super(fields);
    }
}
