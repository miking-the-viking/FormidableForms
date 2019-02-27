import { FormType, FormTypes } from '@/models/Formidable/Form/form.abstract';
import { FormidableWizardForm } from '@/models/Formidable/Form/FormidableWizardForm';
import { plainToClass } from 'class-transformer';
import { FormidableBasicForm } from '@/models/Formidable/Form/FormidableBasicForm';

const BASIC_CONFIG = {
    formType: FormType.Basic,
    fields: []
};

const WIZARD_CONFIG = {
    FormType: FormType.Wizard,
    fields: []
};

const FORM_CONSTRUCTORS: {
    [key: string]: {
        ctor: new (...args: any[]) => FormTypes;
        config: any;
    };
} = {
    [FormType.Basic]: {
        ctor: FormidableBasicForm,
        config: BASIC_CONFIG
    },
    [FormType.Wizard]: {
        ctor: FormidableWizardForm,
        config: WIZARD_CONFIG
    }
};

class FormFactory {
    /**
     * generate a form
     * @param FormType type of the form
     * @param obj optional json for the form
     */
    public generate(formType: FormType, obj?: Partial<FormTypes>): FormTypes {
        const mappedConstructorConfig = FORM_CONSTRUCTORS[formType];

        if (mappedConstructorConfig) {
            const instance = plainToClass(mappedConstructorConfig.ctor, {
                ...mappedConstructorConfig.config,
                ...obj
            });
            return instance instanceof mappedConstructorConfig.ctor
                ? instance
                : instance[0];
        }
        // if (formType === FormType.Basic) {
        //     return plainToClass(FormidableBasicForm, {
        //         ...BASIC_CONFIG,
        //         ...obj
        //     });
        // } else if (formType === FormType.Wizard) {
        //     return plainToClass(FormidableWizardForm, {
        //         ...WIZARD_CONFIG,
        //         ...obj
        //     });
        // }
        throw new Error(`Unknown Form Type: ${formType}`);
    }
}

export default new FormFactory();
