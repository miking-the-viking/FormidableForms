/**
 * Abstract Formidable Form core definition
 */
import { Type } from 'class-transformer';
import { IsDefined, ValidateNested } from 'class-validator';
import 'reflect-metadata';

import { FormidableField } from '../../field/core/field.abstract';
import { FieldType } from '../../field/core/field.types.enum';
import { FormidableDate } from '../../field/date/FormidableDate';
import { FormidableEmail } from '../../field/email/FormidableEmail';
import { FormidableFile } from '../../field/file/FormidableFile';
import { FormidableLink } from '../../field/link/FormidableLink';
import { FormidableNumber } from '../../field/number/FormidableNumber';
import { FormidableNumberRange } from '../../field/numberRange/FormidableNumberRange';
import { FormidablePassword } from '../../field/password/FormidablePassword';
import { FormidableText } from '../../field/text/FormidableText';
import { FormidableTextarea } from '../../field/textarea/FormidableTextarea';
import { FieldConfigType } from './form.types';

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
