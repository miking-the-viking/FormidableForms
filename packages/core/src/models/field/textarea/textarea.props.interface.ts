import { IFormidableFieldProps } from '@/models/field/core/field.props.interface';
import { FieldType } from '@/models/field/core/field.types.enum';

/**
 * Formidable Textarea Props
 */
export interface IFormidableTextareaProps
    extends IFormidableFieldProps<string> {
    fieldType: FieldType.Textarea;
    maxLength?: number;
    minLength?: number;
}
