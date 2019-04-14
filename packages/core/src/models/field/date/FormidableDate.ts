import { FormidableField } from '@/models/field/core/field.abstract';
import { IsOptional } from 'class-validator';
import { FieldType } from '@/models/field/core/field.types.enum';
import { IFormidableDateProps } from '@/models/field/date/date.props.interface';
import { DateType } from '@/models/field/date/date.type.enum';

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
