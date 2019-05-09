import { IsNumber, IsOptional, IsString, ValidateIf } from 'class-validator';

import { FormidableField } from '../core/field.abstract';
import { FieldType } from '../core/field.types.enum';
import { IFormidableTextareaProps } from './textarea.props.interface';
import { IsLongerThan } from '../../../validation/decorators/IsLongerThan';
import { IsShorterThan } from '../../../validation/decorators/IsShorterThan';

export class FormidableTextarea extends FormidableField<string>
    implements IFormidableTextareaProps {
    public fieldType: FieldType.Textarea = FieldType.Textarea;
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
        message: v =>
            'Must be longer than the specified minimum length: ' +
            v.object.minLength
    })
    @IsShorterThan('maxLength', {
        message: v =>
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
