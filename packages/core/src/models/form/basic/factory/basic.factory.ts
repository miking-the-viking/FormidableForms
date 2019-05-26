import { FormidableBasicForm } from '../FormidableBasicForm';
import { FormFactory } from '../../core/factory/form.factory.abstract';
import { FormFactoryObject } from '../../core/factory/form.factory.types';
import { FormType } from '../../core/form.type.enum';

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
