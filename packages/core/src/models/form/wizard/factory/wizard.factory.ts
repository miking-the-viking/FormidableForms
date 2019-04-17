import { FormidableWizardForm } from '../FormidableWizardForm';
import { FormFactory } from '../../core/factory/form.factory.abstract';
import { FormFactoryObject } from '../../core/factory/form.factory.types';
import { FormType } from '../../core/form.type.enum';

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
