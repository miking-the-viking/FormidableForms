import { FormTypes } from './Form.mixin';
import { FormidableBasicForm } from '../../../models/Formidable/Form/FormidableBasicForm';
import { FormType } from '../../../models/Formidable/Form/form.abstract';
// import { FormidableWizardForm } from '../../../models/Formidable/Form/FormidableWizardForm';

export function isBasicForm(form: FormTypes): form is FormidableBasicForm {
    return form.formType === FormType.Basic;
}

// export function isWizardForm(form: FormTypes): form is FormidableWizardForm {
//     return form.formType === FormType.Wizard;
// }
