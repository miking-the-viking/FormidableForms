import { IFormidableFieldProps } from '@/models/field/core/field.props.interface';
import { FieldType } from '@/models/field/core/field.types.enum';

/**
 * Props interface
 */
export interface IFormidableNumberProps extends IFormidableFieldProps<number> {
    fieldType: FieldType.Number;
    minimum?: number;
    maximum?: number;
}
