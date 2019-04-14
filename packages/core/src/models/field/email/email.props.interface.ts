import { IFormidableFieldProps } from '@/models/field/core/field.props.interface';
import { FieldType } from '@/models/field/core/field.types.enum';

/**
 * Formidable Email Props
 */
export interface IFormidableEmailProps extends IFormidableFieldProps<string> {
    fieldType: FieldType.Email;
    maxLength?: number;
    minLength?: number;
}
