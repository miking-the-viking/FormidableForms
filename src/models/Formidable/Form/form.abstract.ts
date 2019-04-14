import { FormidableBasicForm } from '@/models/Formidable/Form/FormidableBasicForm';
import { FormidableWizardForm } from '@/models/Formidable/Form/FormidableWizardForm';
import { IFormidableFileProps } from './../Field/FormidableFile';
import { IFormidableDateProps } from '../Field/Date/FormidableDate';
import { IFormidableNumberRangeProps } from '../Field/NumberRange/FormidableNumberRange';
import { IFormidablePasswordProps } from '../Field/Password/FormidablePassword';
import { IFormidableEmailProps } from '../Field/Email/FormidableEmail';
/**
 * Abstract Formidable Form core definition
 */
import 'reflect-metadata';
import { Type } from 'class-transformer';
import { IsDefined, ValidateNested } from 'class-validator';
import {
    FieldType,
    FormidableField,
    IFormidableFieldProps
} from '@/models/Formidable/Field/field.abstract';
import {
    FormidableLink,
    IFormidableLinkProps
} from '@/models/Formidable/Field/Link/FormidableLink';
import {
    FormidableNumber,
    IFormidableNumberProps
} from '@/models/Formidable/Field/Number/FormidableNumber';
import {
    FormidableText,
    IFormidableTextProps
} from '@/models/Formidable/Field/Text/FormidableText';
import {
    FormidableTextarea,
    IFormidableTextareaProps
} from '@/models/Formidable/Field/Textarea/FormidableTextarea';
import { FormidablePassword } from '@/models/Formidable/Field/Password/FormidablePassword';
import { FormidableEmail } from '@/models/Formidable/Field/Email/FormidableEmail';
import { FormidableNumberRange } from '@/models/Formidable/Field/NumberRange/FormidableNumberRange';
import { FormidableDate } from '@/models/Formidable/Field/Date/FormidableDate';
import { FormidableFile } from '@/models/Formidable/Field/FormidableFile';
import { transformAndValidate } from 'class-transformer-validator';

/**
 * Basic Props for a Formidable Form
 */
export interface IFormidableFormProps {
    fields: Array<IFormidableFieldProps<any>>;
}

export enum FormType {
    Basic = 'basic',
    Wizard = 'wizard'
}

export type FormTypes = FormidableBasicForm | FormidableWizardForm;

export type FieldConfigType =
    | IFormidableNumberProps
    | IFormidableTextProps
    | IFormidableTextareaProps
    | IFormidableLinkProps
    | IFormidableEmailProps
    | IFormidablePasswordProps
    | IFormidableNumberRangeProps
    | IFormidableDateProps
    | IFormidableFileProps;

export type FieldCtorType =
    | FormidableNumber
    | FormidableText
    | FormidableTextarea
    | FormidableLink
    | FormidableEmail
    | FormidablePassword
    | FormidableNumberRange
    | FormidableDate
    | FormidableFile;

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
