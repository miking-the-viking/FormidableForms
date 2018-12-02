import {
    IsOptional,
    IsNumber,
    validate,
    ValidationError,
    IsEnum,
    Equals
} from 'class-validator';

import { FormidableField, IFormidableFieldProps, FieldType } from '@/models/Formidable/Field/field.abstract';


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
export class FormidableNumber extends FormidableField<number> {

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
    public value!: number | null;

    /**
     * Optional minimum value
     */
    @IsOptional()
    @IsNumber()
    public minimum?: number;

    /**
     * Optional maximum value
     */
    @IsOptional()
    @IsNumber()
    public maximum?: number;
}
