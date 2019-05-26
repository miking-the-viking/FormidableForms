import { IsOptional } from 'class-validator';

import { FormidableField } from '../core/field.abstract';
import { FieldType } from '../core/field.types.enum';
import { IFormidableDateProps } from './date.props.interface';
import { DateType } from './date.type.enum';

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
