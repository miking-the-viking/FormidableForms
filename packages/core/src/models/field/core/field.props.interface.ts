import { FieldType } from './field.types.enum';

/**
 * Basic props for a Formidable Field
 */
export interface IFormidableFieldProps<T> {
    fieldType: FieldType;
    name?: string;
    label?: string;
    id?: string;
    required?: boolean;
    disabled?: boolean;
    value: T | null;
}
