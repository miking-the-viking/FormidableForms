import {
    FormidableField,
    IFormidableFieldProps
} from '@/models/Formidable/Field/field.abstract';
import { IsOptional, IsNumber, ValidateIf, IsString } from 'class-validator';
import { IsLongerThan } from '@/models/IsLongerThan';
import { IsShorterThan } from '@/models/IsShorterThan';
import { IsStringOrNull } from '@/models/IsStringOrNull';

export interface IFormidableTextareaProps
    extends IFormidableFieldProps<string> {
    maxLength?: number;
    minLength?: number;
}

export class FormidableTextarea extends FormidableField<string>
    implements IFormidableTextareaProps {
    /**
     * Optional minimum length
     */
    @IsOptional()
    @IsNumber()
    public minLength?: number;

    /**
     * Optional maximum length
     */
    @IsOptional()
    @IsNumber()
    public maxLength?: number;

    /**
     * The given value of the field
     */
    @IsLongerThan('minLength', {
        message: (v) =>
            'Must be longer than the specified minimum length: ' +
            v.object.minLength
    })
    @IsShorterThan('maxLength', {
        message: (v) =>
            'Must be shorter than the specified maxLength: ' +
            v.object.maxLength
    })
    @IsString()
    @ValidateIf((o: FormidableTextarea, v: any) => o.required || v != null)
    public value!: string | null;

    get fieldIsSubmittable() {
        return this.required ? this.value != null : true;
    }
}
