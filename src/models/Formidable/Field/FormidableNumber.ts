import {
    IsOptional,
    IsNumber,
    validate,
    ValidationError
} from 'class-validator';

import { FormidableField } from '@/models/Formidable/Field/field.abstract';

/**
 * Formidable Field definition for a number input
 */
export class FormidableNumber extends FormidableField {

    /**
     * The value of the number
     */
    @IsNumber()
    @IsOptional()
    public value!: number;

    /**
     * Optional minimum value
     */
    @IsOptional()
    public minimum?: number;

    /**
     * Optional maximum value
     */
    @IsOptional()
    public maximum?: number;

    constructor(props: any) {
        super();
    }
}
