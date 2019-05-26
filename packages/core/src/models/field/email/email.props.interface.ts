import { IFormidableFieldProps } from '../core/field.props.interface';
import { FieldType } from '../core/field.types.enum';

/**
 * Formidable Email Props
 */
export interface IFormidableEmailProps extends IFormidableFieldProps<string> {
    fieldType: FieldType.Email;
    maxLength?: number;
    minLength?: number;
}
