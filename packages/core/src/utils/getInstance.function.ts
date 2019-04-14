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
import { FieldConfigType, FieldCtorType } from '@/models/form/core/form.types';
import { transformAndValidate } from 'class-transformer-validator';

/**
 * Function to return an Instance of the provided field
 * @todo Test and validate this function
 * @param f
 */
export async function getInstance(f: FieldConfigType): Promise<FieldCtorType> {
    let ctor: new (...args: any[]) => FieldCtorType;
    switch (f.fieldType) {
        case FieldType.Number:
            ctor = FormidableNumber;
            break;
        case FieldType.Text:
            ctor = FormidableText;
            break;
        case FieldType.Textarea:
            ctor = FormidableTextarea;
            break;
        case FieldType.Link:
            ctor = FormidableLink;
            break;
        case FieldType.Email:
            ctor = FormidableEmail;
            break;
        case FieldType.Password:
            ctor = FormidablePassword;
            break;
        case FieldType.NumberRange:
            ctor = FormidableNumberRange;
            break;
        case FieldType.Datetime:
            ctor = FormidableDate;
            break;
        case FieldType.File:
            ctor = FormidableFile;
            break;
        default:
            throw new Error(
                `Invalid Formidable Field Type: ${(f as any).fieldType}`
            );
    }

    return await transformAndValidate(ctor, f);
}
