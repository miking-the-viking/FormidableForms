import { IFormidableFieldProps } from '@/models/Formidable/Field/Core/field.props.interface';
import { FieldType } from '@/models/Formidable/Field/Core/field.types.enum';

/**
 * Formidable Password Props
 */
export interface IFormidablePasswordProps
    extends IFormidableFieldProps<string> {
    fieldType: FieldType.Password;
    maxLength?: number;
    minLength?: number;
}
