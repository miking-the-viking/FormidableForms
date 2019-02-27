import { FormType } from '@/models/Formidable/Form/form.abstract';
import { FormidableWizardForm } from '@/models/Formidable/Form/FormidableWizardForm';
import { plainToClass } from 'class-transformer';
import { FormTypes } from '@/components/Formidable/Form/Form.mixin';
import { FormidableBasicForm } from './FormidableBasicForm';

const BASIC_CONFIG = {
    formType: FormType.Basic,
    fields: []
};

const WIZARD_CONFIG = {
    FormType: FormType.Wizard,
    fields: []
};

class FormFactory {
    /**
     * generate a form
     * @param FormType type of the form
     * @param obj optional json for the form
     */
    public generate(formType: FormType, obj?: Partial<FormTypes>): FormTypes {
        if (formType === FormType.Basic) {
            return plainToClass(FormidableBasicForm, {
                ...BASIC_CONFIG,
                ...obj
            });
        } else if (formType === FormType.Wizard) {
            return plainToClass(FormidableWizardForm, {
                ...WIZARD_CONFIG,
                ...obj
            });
        }
        throw new Error(`Unknown Form Type: ${formType}`);
    }
}

export default new FormFactory();
