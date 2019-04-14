import { IFormidableFieldProps } from '@/models/field/core/field.props.interface';
import { FieldType } from '@/models/field/core/field.types.enum';
import { DateType } from '@/models/field/date/date.type.enum';

/**
 * Props for a Formidable Date
 */
export interface IFormidableDateProps extends IFormidableFieldProps<string> {
    fieldType: FieldType.Datetime;
    dateType: DateType;
}
