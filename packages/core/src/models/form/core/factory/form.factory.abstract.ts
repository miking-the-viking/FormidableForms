import { FormFactoryObject } from '../factory/form.factory.types';
import { IFormidableFormProps } from '../form.props.interface';
import { FormTypes } from '../form.types';

/**
 * Form Factory
 */
export abstract class FormFactory<T extends IFormidableFormProps> {
    /**
     * Build a single object of the field T
     * @param config BasicFieldFactoryObject or a Partial of T
     */
    public abstract buildForm(config?: FormFactoryObject | {}): FormTypes & T;

    /**
     * Generate an array of {count} valid T form objects, optionally autopopulated by {config}
     * @param count
     * @param config
     */
    public abstract generate(
        count?: number,
        config?: FormFactoryObject | {}
    ): T[];

    /**
     * Build the base field object
     */
    protected buildBaseField(config: FormFactoryObject | {} = {}) {
        return {
            value: null,
            ...config
        };
    }
}
