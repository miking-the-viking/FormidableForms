import { IsEmail, IsNumber, IsOptional } from 'class-validator';

import { FormidableField } from '../core/field.abstract';
import { FieldType } from '../core/field.types.enum';
import { IFormidableEmailProps } from './email.props.interface';
import { IsGreaterThanOrEqualTo } from '../../../validation/decorators/IsGreaterThanOrEqualTo';
import { IsLessThanOrEqualTo } from '../../../validation/decorators/IsLessThanOrEqualTo';
import { IsLongerThan } from '../../../validation/decorators/IsLongerThan';
import { IsShorterThan } from '../../../validation/decorators/IsShorterThan';
import { IsStringOrNull } from '../../../validation/decorators/IsStringOrNull';

/**
 * Formidable Field definition for a Email input
 */
export class FormidableEmail extends FormidableField<string>
    implements IFormidableEmailProps {
    public fieldType: FieldType.Email = FieldType.Email;
    /**
     * Optional minimum length
     */
    @IsOptional()
    @IsNumber()
    @IsLessThanOrEqualTo('maxLength', {
        message: v =>
            'MinLength must be less than or equal to specified maximum length: ' +
            v.object.maxLength
    })
    public minLength?: number;

    /**
     * Optional maximum length
     */
    @IsOptional()
    @IsNumber()
    @IsGreaterThanOrEqualTo('minLength', {
        message: v =>
            'MaxLength must be greater than or equal to the specified minimum length: ' +
            v.object.minLength
    })
    public maxLength?: number;

    /**
     * The given value of the field
     */
    @IsLongerThan('minLength', {
        message: v =>
            'Must be longer than or equal to the specified minimum length: ' +
            v.object.minLength
    })
    @IsShorterThan('maxLength', {
        message: v =>
            'Must be shorter than or equal to the specified maximum length: ' +
            v.object.maxLength
    })
    @IsStringOrNull()
    @IsEmail()
    @IsOptional()
    public value!: string;

    get fieldIsSubmittable() {
        return this.required ? this.value != null : true;
    }
}
