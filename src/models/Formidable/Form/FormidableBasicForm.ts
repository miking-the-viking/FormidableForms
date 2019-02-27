/**
 * Basic implementation of Formidable Form
 */
import { FormidableForm } from '@/models/Formidable/Form/form.abstract';
import { FormType } from './form.abstract';
import { IsDefined, Equals } from 'class-validator';

/**
 * Formidable Basic Form
 * The Basic form is a single form
 */
export class FormidableBasicForm extends FormidableForm {
    @IsDefined()
    @Equals(FormType.Basic)
    public formType: FormType.Basic = FormType.Basic;
}
