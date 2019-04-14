import { FormidableField } from '@/models/Formidable/Field/Core/field.abstract';
import { FieldType } from '@/models/Formidable/Field/Core/field.types.enum';
import { IFormidableEmailProps } from '@/models/Formidable/Field/Email/email.props.interface';
import { IsGreaterThanOrEqualTo } from '@/models/IsGreaterThanOrEqualTo';
import { IsLessThanOrEqualTo } from '@/models/IsLessThanOrEqualTo';
import { IsLongerThan } from '@/models/IsLongerThan';
import { IsShorterThan } from '@/models/IsShorterThan';
import { IsStringOrNull } from '@/models/IsStringOrNull';
import { IsEmail, IsNumber, IsOptional } from 'class-validator';

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
