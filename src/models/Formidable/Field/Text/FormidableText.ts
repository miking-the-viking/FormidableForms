import {
    FormidableField,
    IFormidableFieldProps,
    FieldType
} from '@/models/Formidable/Field/field.abstract';
import {
    IsOptional,
    IsNumber,
    IsEnum,
    Equals,
    IsIn,
    ValidateIf,
    IsString
} from 'class-validator';
import { IsLongerThan } from '@/models/IsLongerThan';
import { IsStringOrNull } from '@/models/IsStringOrNull';
import { IsShorterThan } from '@/models/IsShorterThan';
import { IsLessThanOrEqualTo } from '@/models/IsLessThanOrEqualTo';
import { IsGreaterThanOrEqualTo } from '@/models/IsGreaterThanOrEqualTo';

export interface IFormidableTextProps extends IFormidableFieldProps<string> {
    fieldType: FieldType.Text;
    maxLength?: number;
    minLength?: number;
}

/**
 * Formidable Field definition for a text input
 */
export class FormidableText extends FormidableField<string>
    implements IFormidableTextProps {
    // @IsEnum(FieldType)
    // @Equals(FieldType.Text)
    public fieldType: FieldType.Text = FieldType.Text;

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
    @IsString()
    @ValidateIf((o: FormidableText, v: any) => o.required || v != null)
    public value!: string | null;

    get fieldIsSubmittable() {
        return this.required ? this.value != null : true;
    }
}
