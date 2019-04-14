import { IFormidableFieldProps } from '@/models/field/core/field.props.interface';
import { FieldType } from '@/models/field/core/field.types.enum';
import { INumberRange } from '@/models/field/numberRange/numberRange.interface';

/**
 * Props interface
 */
export interface IFormidableNumberRangeProps
    extends IFormidableFieldProps<INumberRange> {
    fieldType: FieldType.NumberRange;
    value: INumberRange;
}
