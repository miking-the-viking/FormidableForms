import { FormidableBasicForm } from '@/models/Formidable/Form/Basic/FormidableBasicForm';
import { FormFactory } from '@/models/Formidable/Form/Core/Factory/form.factory';
import { FormFactoryObject } from '@/models/Formidable/Form/Core/Factory/form.factory.types';
import { FormType } from '@/models/Formidable/Form/Core/form.type.enum';

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
