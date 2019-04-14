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
import {
    FieldConfigType,
    FieldCtorType
} from '@/models/Formidable/Form/Core/form.types';
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
