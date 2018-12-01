import { FormidableForm } from '@/models/Formidable/Form/form.abstract';
import { FormidableField } from '@/models/Formidable/Field/field.abstract';

/**
 * Formidable Wizard Definition
 * The Wizard provides a multi step-guided form
 */
export class FormidableWizardForm extends FormidableForm {

    constructor(fields?: FormidableField[]) {
        super(fields);
    }
}
