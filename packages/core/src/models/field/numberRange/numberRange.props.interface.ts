import { IFormidableFieldProps } from '../core/field.props.interface';
import { FieldType } from '../core/field.types.enum';
import { INumberRange } from './numberRange.interface';

/**
 * Props interface
 */
export interface IFormidableNumberRangeProps
    extends IFormidableFieldProps<INumberRange> {
    fieldType: FieldType.NumberRange;
    value: INumberRange;
}
