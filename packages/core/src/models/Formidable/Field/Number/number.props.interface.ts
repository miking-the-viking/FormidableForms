import { IFormidableFieldProps } from '@/models/Formidable/Field/Core/field.props.interface';
import { FieldType } from '@/models/Formidable/Field/Core/field.types.enum';

/**
 * Props interface
 */
export interface IFormidableNumberProps extends IFormidableFieldProps<number> {
    fieldType: FieldType.Number;
    minimum?: number;
    maximum?: number;
}
