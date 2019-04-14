import { FormidableWizardForm } from '@/models/form/Wizard/FormidableWizardForm';
import { FormidableBasicForm } from '@/models/form/Basic/FormidableBasicForm';
import { FormTypes } from '../form.types';
import { FormType } from '../form.type.enum';
import { BASIC_CONFIG } from '../../Basic/constants/basic.form.config';
import { WIZARD_CONFIG } from '../../Wizard/constants/wizard.form.config';

export const FORM_CONSTRUCTORS: {
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
