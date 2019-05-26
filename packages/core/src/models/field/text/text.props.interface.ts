import { IFormidableFieldProps } from '../core/field.props.interface';
import { FieldType } from '../core/field.types.enum';

/**
 * Formidable Test Props
 */
export interface IFormidableTextProps extends IFormidableFieldProps<string> {
    fieldType: FieldType.Text;
    maxLength?: number;
    minLength?: number;
}
