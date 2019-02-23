/**
 * Basic implementation of Formidable Form
 */
import { FormidableForm } from '@/models/Formidable/Form/form.abstract';
import { FormType } from './form.abstract';

/**
 * Formidable Basic Form
 * The Basic form is a single form
 */
export class FormidableBasicForm extends FormidableForm {
    public formType = FormType.Basic;
}
