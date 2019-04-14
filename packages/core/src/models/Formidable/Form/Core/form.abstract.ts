/**
 * Abstract Formidable Form core definition
 */
import { FormidableField } from '@/models/Formidable/Field/Core/field.abstract';
import { FieldType } from '@/models/Formidable/Field/Core/field.types.enum';
import { FormidableDate } from '@/models/Formidable/Field/Date/FormidableDate';
import { FormidableEmail } from '@/models/Formidable/Field/Email/FormidableEmail';
import { FormidableFile } from '@/models/Formidable/Field/File/FormidableFile';
import { FormidableLink } from '@/models/Formidable/Field/Link/FormidableLink';
import { FormidableNumber } from '@/models/Formidable/Field/Number/FormidableNumber';
import { FormidableNumberRange } from '@/models/Formidable/Field/NumberRange/FormidableNumberRange';
import { FormidablePassword } from '@/models/Formidable/Field/Password/FormidablePassword';
import { FormidableText } from '@/models/Formidable/Field/Text/FormidableText';
import { FormidableTextarea } from '@/models/Formidable/Field/Textarea/FormidableTextarea';
import { FieldConfigType } from '@/models/Formidable/Form/Core/form.types';
import { Type } from 'class-transformer';
import { IsDefined, ValidateNested } from 'class-validator';
import 'reflect-metadata';

/**
 * Formidable Form definition
 */
export abstract class FormidableForm {
    /**
     * fields of the form
     */
    @IsDefined()
    @ValidateNested({
        each: true
    })
    @Type(() => FormidableField, {
        discriminator: {
            property: 'fieldType',
            subTypes: [
                { value: FormidableNumber, name: FieldType.Number },
                { value: FormidableText, name: FieldType.Text },
                { value: FormidableTextarea, name: FieldType.Textarea },
                { value: FormidableLink, name: FieldType.Link },
                { value: FormidableEmail, name: FieldType.Email },
                { value: FormidablePassword, name: FieldType.Password },
                { value: FormidableNumberRange, name: FieldType.NumberRange },
                { value: FormidableDate, name: FieldType.Date },
                { value: FormidableFile, name: FieldType.File }
            ]
        }
    })
    public fields!: FieldConfigType[];

    /**
     * Submit action for the form, optional or null if retrieving the values and submitting by another means.
     */
    public submit?: () => Promise<void> | null;
}
