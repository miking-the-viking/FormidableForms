import { IFormidableFieldProps } from '@/models/Formidable/Field/Core/field.props.interface';
import { FieldType } from '@/models/Formidable/Field/Core/field.types.enum';

/**
 * Formidable Email Props
 */
export interface IFormidableEmailProps extends IFormidableFieldProps<string> {
    fieldType: FieldType.Email;
    maxLength?: number;
    minLength?: number;
}
