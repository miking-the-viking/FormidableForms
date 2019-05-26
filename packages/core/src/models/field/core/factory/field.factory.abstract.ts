import { FieldType } from '../field.types.enum';
import { IFormidableFieldProps } from '../field.props.interface';
import { FieldConfigType } from '../../../form/core/form.types';

/**
 * A Basic Factory Object must at least have fieldType
 */
export type BasicFieldFactoryObject = Partial<IFormidableFieldProps<any>> & {
    fieldType: FieldType;
};

/**
 * Abstract Field Factory definition that takes as Generic Inputs T (the IFormidableFieldProps)
 */
export abstract class FieldFactory<T extends IFormidableFieldProps<any>> {
    /**
     * Build a single object of the field T
     * @param config BasicFieldFactoryObject or a Partial of T
     */
    public abstract buildField(
        config?: BasicFieldFactoryObject | {}
    ): FieldConfigType & T;

    /**
     * Generate an array of {count} valid T objects, optionally autopopulated by {config}
     * @param count
     * @param config
     */
    public abstract generate(
        count?: number,
        config?: BasicFieldFactoryObject | {}
    ): T[];

    /**
     * Build the base field object
     */
    protected buildBaseField(config: BasicFieldFactoryObject | {} = {}) {
        return {
            value: null,
            ...config
        };
    }
}
