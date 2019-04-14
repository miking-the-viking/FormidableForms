import { IFormidableFieldProps } from '@/models/Formidable/Field/Core/field.props.interface';
import { FieldType } from '@/models/Formidable/Field/Core/field.types.enum';

/**
 * Formidable Textarea Props
 */
export interface IFormidableTextareaProps
    extends IFormidableFieldProps<string> {
    fieldType: FieldType.Textarea;
    maxLength?: number;
    minLength?: number;
}
