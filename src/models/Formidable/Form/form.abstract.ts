import { FormidableField } from '@/models/Formidable/Field/field.abstract';
import { FieldType } from './../Field/field.abstract';
/**
 * Abstract Formidable Form core definition
 */
import 'reflect-metadata';
import { Type } from 'class-transformer';
import { IsDefined, ValidateNested } from 'class-validator';
import {
    FormidableLink,
    IFormidableLinkProps
} from '@/models/Formidable/Field/FormidableLink';
import {
    FormidableNumber,
    IFormidableNumberProps
} from '@/models/Formidable/Field/FormidableNumber';
import {
    FormidableText,
    IFormidableTextProps
} from '@/models/Formidable/Field/FormidableText';
import {
    FormidableTextarea,
    IFormidableTextareaProps
} from '@/models/Formidable/Field/FormidableTextarea';
import {
    FormidablePassword,
    IFormidablePasswordProps
} from '@/models/Formidable/Field/FormidablePassword';
import {
    FormidableEmail,
    IFormidableEmailProps
} from '@/models/Formidable/Field/FormidableEmail';
import {
    FormidableNumberRange,
    IFormidableNumberRangeProps
} from '@/models/Formidable/Field/FormidableNumberRange';
import {
    FormidableDate,
    IFormidableDateProps
} from '@/models/Formidable/Field/FormidableDate';
import {
    FormidableFile,
    IFormidableFileProps
} from '@/models/Formidable/Field/FormidableFile';
import { IFormidableFieldProps } from '../Field/field.abstract';

/**
 * Basic Props for a Formidable Form
 */
export interface IFormidableFormProps {
    fields: Array<IFormidableFieldProps<any>>;
}

export type FieldConfigTypes =
    | IFormidableNumberProps
    | IFormidableTextProps
    | IFormidableTextareaProps
    | IFormidableLinkProps
    | IFormidableEmailProps
    | IFormidablePasswordProps
    | IFormidableNumberRangeProps
    | IFormidableDateProps
    | IFormidableFileProps;

export enum FormType {
    Basic = 'basic',
    Wizard = 'wizard'
}

/**
 * Formidable Form definition
 */
export abstract class FormidableForm {
    public formType!: FormType;

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
    public fields!: FieldConfigTypes[];

    /**
     * Submit action for the form, optional or null if retrieving the values and submitting by another means.
     */
    public submit?: () => Promise<void> | null;
}

export type FieldCtorTypes =
    | FormidableNumber
    | FormidableText
    | FormidableTextarea
    | FormidableLink
    | FormidableEmail
    | FormidablePassword
    | FormidableNumberRange
    | FormidableDate
    | FormidableFile;
