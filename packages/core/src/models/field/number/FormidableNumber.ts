import { IsNumber, IsOptional, ValidateIf } from 'class-validator';

import { FormidableField } from '../core/field.abstract';
import { FieldType } from '../core/field.types.enum';
import { IFormidableNumberProps } from './number.props.interface';
import { IsGreaterThanOrEqualTo } from '../../validation/decorators/IsGreaterThanOrEqualTo';
import { IsLessThanOrEqualTo } from '../../validation/decorators/IsLessThanOrEqualTo';

/**
 * Formidable Field definition for a number input
 */
export class FormidableNumber extends FormidableField<number>
    implements IFormidableNumberProps {
    public fieldType: FieldType.Number = FieldType.Number;

    /**
     * The value of the number
     */
    @ValidateIf((o: FormidableNumber, v: any) => o.required || v != null)
    @IsNumber() // this may not work with null, tbd.
    // @IsOptional()
    @IsLessThanOrEqualTo('maximum', {
        message: v =>
            'Value must be less than specified maximum: ' + v.object.maximum
    })
    @IsGreaterThanOrEqualTo('minimum', {
        message: v =>
            'Value must be greater than or equal to specified minimum: ' +
            v.object.minimum
    })
    public value!: number | null;

    /**
     * Optional minimum value
     */
    @IsOptional()
    @IsNumber()
    @IsLessThanOrEqualTo('maximum', {
        message: v =>
            'The minimum has to be less than or equal to the maximum: ' +
            v.object.maximum
    })
    public minimum?: number;

    /**
     * Optional maximum value
     */
    @IsOptional()
    @IsNumber()
    @IsGreaterThanOrEqualTo('minimum', {
        message: v =>
            'The maximum has to be greater than or equal to the minimum: ' +
            v.object.maximum
    })
    public maximum?: number;

    get fieldIsSubmittable() {
        return this.required ? this.value != null : true;
    }

    // constructor(props: IFormidableNumberProps) {
    // 	super(props);
    // 	this.minimum = props.minimum || undefined;
    // 	this.maximum = props.maximum || undefined;
    // }
}
