import { IFormidableFieldProps } from '@/models/Formidable/Field/Core/field.props.interface';
import { FieldType } from '@/models/Formidable/Field/Core/field.types.enum';
import { INumberRange } from '@/models/Formidable/Field/NumberRange/numberRange.interface';

/**
 * Props interface
 */
export interface IFormidableNumberRangeProps
    extends IFormidableFieldProps<INumberRange> {
    fieldType: FieldType.NumberRange;
    value: INumberRange;
}
