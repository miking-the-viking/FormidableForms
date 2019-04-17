import { IFormidableFieldProps } from '../core/field.props.interface';
import { FieldType } from '../core/field.types.enum';
import { DateType } from './date.type.enum';

/**
 * Props for a Formidable Date
 */
export interface IFormidableDateProps extends IFormidableFieldProps<string> {
    fieldType: FieldType.Datetime;
    dateType: DateType;
}
