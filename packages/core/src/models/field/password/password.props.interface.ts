import { IFormidableFieldProps } from '../core/field.props.interface';
import { FieldType } from '../core/field.types.enum';

/**
 * Formidable Password Props
 */
export interface IFormidablePasswordProps
    extends IFormidableFieldProps<string> {
    fieldType: FieldType.Password;
    maxLength?: number;
    minLength?: number;
}
