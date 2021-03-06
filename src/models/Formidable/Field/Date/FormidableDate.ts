import {
    FormidableField,
    IFormidableFieldProps,
    FieldType
} from '@/models/Formidable/Field/field.abstract';
import { IsOptional, IsDateString } from 'class-validator';

export enum DateType {
    Datetime = 'datetime',
    Date = 'date',
    Time = 'time'
}

export interface IFormidableDateProps extends IFormidableFieldProps<string> {
    fieldType: FieldType.Datetime;
    dateType: DateType;
}

/**
 * Formidable Field definition for a Date input
 */
export class FormidableDate extends FormidableField<string>
    implements IFormidableDateProps {
    public fieldType: FieldType.Datetime = FieldType.Datetime;
    /**
     * BUGGY! TO BE FIXED
     * The given value of the field
     */
    // @IsDateString({
    // 	message: (val) => 'Please select a valid date.',
    // })
    @IsOptional() public value!: string;

    public dateType!: DateType;

    get fieldIsSubmittable() {
        return this.required ? this.value != null : true;
    }
}
