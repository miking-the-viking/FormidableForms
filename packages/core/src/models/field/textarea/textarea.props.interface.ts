import { IFormidableFieldProps } from '../core/field.props.interface';
import { FieldType } from '../core/field.types.enum';

/**
 * Formidable Textarea Props
 */
export interface IFormidableTextareaProps
    extends IFormidableFieldProps<string> {
    fieldType: FieldType.Textarea;
    maxLength?: number;
    minLength?: number;
}
