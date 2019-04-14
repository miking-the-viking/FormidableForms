import { IFormidableFieldProps } from '@/models/field/core/field.props.interface';
import { FieldType } from '@/models/field/core/field.types.enum';

/**
 * Formidable Password Props
 */
export interface IFormidablePasswordProps
    extends IFormidableFieldProps<string> {
    fieldType: FieldType.Password;
    maxLength?: number;
    minLength?: number;
}
