import { IFormidableFieldProps } from '../core/field.props.interface';
import { FieldType } from '../core/field.types.enum';

/**
 * Props interface
 */
export interface IFormidableNumberProps extends IFormidableFieldProps<number> {
    fieldType: FieldType.Number;
    minimum?: number;
    maximum?: number;
}
