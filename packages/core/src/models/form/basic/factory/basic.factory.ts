import { FormidableBasicForm } from '@/models/form/Basic/FormidableBasicForm';
import { FormFactory } from '@/models/form/core/factory/form.factory.abstract';
import { FormFactoryObject } from '@/models/form/core/factory/form.factory.types';
import { FormType } from '@/models/form/core/form.type.enum';

/**
 * Basic Form implementation of the abstract Form Factory
 */
export class BasicFormFactory extends FormFactory<FormidableBasicForm> {
    public buildForm(config: FormFactoryObject | {} = {}) {
        return {
            formType: FormType.Basic,
            fields: [],
            ...config
        } as FormidableBasicForm;
    }

    public generate(count: number = 1, config: FormFactoryObject | {} = {}) {
        return new Array(count).map(x => this.buildForm(config));
    }
}
