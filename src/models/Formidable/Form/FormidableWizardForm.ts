/**
 * Wizard implementation of Formidable Form
 */
import {
    FormidableForm,
    FormType
} from '@/models/Formidable/Form/form.abstract';
import { IsDefined, Equals } from 'class-validator';

/**
 * Formidable Wizard Definition
 * The Wizard provides a multi step-guided form
 */
export class FormidableWizardForm extends FormidableForm {
    @IsDefined()
    @Equals(FormType.Wizard)
    public formType: FormType.Basic = FormType.Basic;
}
