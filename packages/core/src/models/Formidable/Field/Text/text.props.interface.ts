import { IFormidableFieldProps } from '@/models/Formidable/Field/Core/field.props.interface';
import { FieldType } from '@/models/Formidable/Field/Core/field.types.enum';

/**
 * Formidable Test Props
 */
export interface IFormidableTextProps extends IFormidableFieldProps<string> {
    fieldType: FieldType.Text;
    maxLength?: number;
    minLength?: number;
}
