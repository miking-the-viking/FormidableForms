import { FieldConfigType } from '@/models/Formidable/Form/form.abstract';
import { IFormidableFieldProps, FieldType } from './field.abstract';

export type BasicFieldFactoryObject = Partial<IFormidableFieldProps<any>> & {
    fieldType: FieldType;
};

/**
 * Abstract Field Factory definition that takes as Generic Inputs T (the IFormidableFieldProps)
 */
export abstract class Factory<T extends IFormidableFieldProps<any>> {
    public abstract buildField(
        config?: BasicFieldFactoryObject | {}
    ): FieldConfigType & T;

    public abstract generate(
        count?: number,
        config?: BasicFieldFactoryObject | {}
    ): T[];

    protected buildBaseField(config: BasicFieldFactoryObject | {} = {}) {
        return {
            value: null,
            ...config
        };
    }
}
