import { FormidableField } from '@/models/field/core/field.abstract';
import { FieldType } from '@/models/field/core/field.types.enum';
import { NumberRange } from '@/models/field/numberRange/NumberRange';
import { INumberRange } from '@/models/field/numberRange/numberRange.interface';
import { IFormidableNumberRangeProps } from '@/models/field/numberRange/numberRange.props.interface';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import 'reflect-metadata';

/**
 * Formidable Number Range Validation Class
 */
export class FormidableNumberRange extends FormidableField<INumberRange>
    implements IFormidableNumberRangeProps {
    public fieldType: FieldType.NumberRange = FieldType.NumberRange;

    @ValidateNested()
    @Type(() => NumberRange)
    public value!: INumberRange;

    get fieldIsSubmittable() {
        return this.required
            ? this.value.from != null && this.value.to != null
            : true;
    }
}
