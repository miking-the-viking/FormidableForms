import {
    IsOptional,
    IsNumber,
    IsEnum,
    Equals
} from 'class-validator';

import { FormidableField, IFormidableFieldProps, FieldType } from '@/models/Formidable/Field/field.abstract';
import { IsGreaterThanOrEqualTo } from '@/models/IsGreaterThanOrEqualTo';
import { IsLessThanOrEqualTo } from '@/models/IsLessThanOrEqualTo';


/**
 * Props interface
 */
export interface IFormidableNumberProps extends IFormidableFieldProps {
    minimum?: number;
    maximum?: number;
}

/**
 * Formidable Field definition for a number input
 */
export class FormidableNumber extends FormidableField<number> implements IFormidableNumberProps {

    /**
     * Specifically only allow Number enum
     */
    @IsEnum(FieldType)
    @Equals(FieldType.Number)
    public type!: FieldType;

    /**
     * The value of the number
     */
    @IsNumber() // this may not work with null, tbd.
    @IsOptional()
    @IsLessThanOrEqualTo('maximum', {
        message: 'Value must be less than specified maximum'
    })
    @IsGreaterThanOrEqualTo('minimum', {
        message: 'Value must be greater than specified minim um'
    })
    public value!: number | null;

    /**
     * Optional minimum value
     */
    @IsOptional()
    @IsNumber()
    @IsLessThanOrEqualTo('maximum', {
        message: 'The minimum has to be less than or equal to the maximum'
    })
    public minimum?: number;

    /**
     * Optional maximum value
     */
    @IsOptional()
    @IsNumber()
    @IsGreaterThanOrEqualTo('minimum', {
        message: 'The maximum has to be greater than or equal to the minimum'
    })
    public maximum?: number;
}
