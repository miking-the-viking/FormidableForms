/**
 * Abstract Formidable Form core definition
 */
import { FormidableField } from '@/models/field/core/field.abstract';
import { FieldType } from '@/models/field/core/field.types.enum';
import { FormidableDate } from '@/models/field/date/FormidableDate';
import { FormidableEmail } from '@/models/field/email/FormidableEmail';
import { FormidableFile } from '@/models/field/file/FormidableFile';
import { FormidableLink } from '@/models/field/link/FormidableLink';
import { FormidableNumber } from '@/models/field/number/FormidableNumber';
import { FormidableNumberRange } from '@/models/field/numberRange/FormidableNumberRange';
import { FormidablePassword } from '@/models/field/password/FormidablePassword';
import { FormidableText } from '@/models/field/text/FormidableText';
import { FormidableTextarea } from '@/models/field/textarea/FormidableTextarea';
import { FieldConfigType } from '@/models/form/core/form.types';
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
