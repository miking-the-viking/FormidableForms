import { FormidableField } from '@/models/field/core/field.abstract';
import { FieldType } from '@/models/field/core/field.types.enum';
import { IFormidablePasswordProps } from '@/models/field/password/password.props.interface';
import { IsGreaterThanOrEqualTo } from '@/models/validation/decorators/IsGreaterThanOrEqualTo';
import { IsLessThanOrEqualTo } from '@/models/validation/decorators/IsLessThanOrEqualTo';
import { IsLongerThan } from '@/models/validation/decorators/IsLongerThan';
import { IsShorterThan } from '@/models/validation/decorators/IsShorterThan';
import { IsStringOrNull } from '@/models/validation/decorators/IsStringOrNull';
import { IsNumber, IsOptional } from 'class-validator';

/**
 * Formidable Field definition for a Password input
 */
export class FormidablePassword extends FormidableField<string>
    implements IFormidablePasswordProps {
    public fieldType: FieldType.Password = FieldType.Password;
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
    public value!: string | null;

    get fieldIsSubmittable() {
        return this.required ? this.value != null : true;
    }
}