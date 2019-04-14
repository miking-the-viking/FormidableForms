import { FormidableWizardForm } from '@/models/form/Wizard/FormidableWizardForm';
import { FormFactory } from '@/models/form/core/factory/form.factory.abstract';
import { FormFactoryObject } from '@/models/form/core/factory/form.factory.types';
import { FormType } from '@/models/form/core/form.type.enum';

/**
 * Wizard Form implementation of the abstract Form Factory
 */
export class WizardFormFactory extends FormFactory<FormidableWizardForm> {
    public buildForm(config: FormFactoryObject | {} = {}) {
        return {
            formType: FormType.Wizard,
            fields: [],
            ...config
        } as FormidableWizardForm;
    }

    public generate(count: number = 1, config: FormFactoryObject | {} = {}) {
        return new Array(count).map(x => this.buildForm(config));
    }
}
