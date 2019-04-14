import { IFormidableFieldProps } from '@/models/Formidable/Field/Core/field.props.interface';
import { FieldType } from '@/models/Formidable/Field/Core/field.types.enum';
import { DateType } from '@/models/Formidable/Field/Date/date.type.enum';

/**
 * Props for a Formidable Date
 */
export interface IFormidableDateProps extends IFormidableFieldProps<string> {
    fieldType: FieldType.Datetime;
    dateType: DateType;
}
