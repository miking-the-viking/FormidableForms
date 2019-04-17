import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import 'reflect-metadata';

import { FormidableField } from '../core/field.abstract';
import { FieldType } from '../core/field.types.enum';
import { NumberRange } from './NumberRange';
import { INumberRange } from './numberRange.interface';
import { IFormidableNumberRangeProps } from './numberRange.props.interface';

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
