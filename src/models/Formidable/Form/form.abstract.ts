import { FormidableBasicForm } from '@/models/Formidable/Form/FormidableBasicForm';
import { FormidableWizardForm } from '@/models/Formidable/Form/FormidableWizardForm';
import { IFormidableFileProps } from './../Field/FormidableFile';
import { IFormidableDateProps } from './../Field/FormidableDate';
import { IFormidableNumberRangeProps } from './../Field/FormidableNumberRange';
import { IFormidablePasswordProps } from './../Field/FormidablePassword';
import { IFormidableEmailProps } from './../Field/FormidableEmail';
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
import { FormidablePassword } from '@/models/Formidable/Field/FormidablePassword';
import { FormidableEmail } from '@/models/Formidable/Field/FormidableEmail';
import { FormidableNumberRange } from '@/models/Formidable/Field/FormidableNumberRange';
import { FormidableDate } from '@/models/Formidable/Field/FormidableDate';
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

type FieldConfigTypes =
    | IFormidableNumberProps
    | IFormidableTextProps
    | IFormidableTextareaProps
    | IFormidableLinkProps
    | IFormidableEmailProps
    | IFormidablePasswordProps
    | IFormidableNumberRangeProps
    | IFormidableDateProps
    | IFormidableFileProps;

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

type FieldConfigTypesTest = IFormidableNumberProps;

type FieldCtorTypesTest = FormidableNumber | FormidableText;

async function getInstance(
    f: FieldConfigTypesTest
): Promise<FieldCtorTypesTest> {
    switch (f.fieldType) {
        case FieldType.Number:
            return await transformAndValidate(FormidableNumber, f);
        case FieldType.Text:
            return await transformAndValidate(FormidableText, f);
        default:
            throw new Error(`Invalid Formidable Field Type: ${f.fieldType}`);
    }
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
    public fields!: FieldConfigTypes[];

    /**
     * Submit action for the form, optional or null if retrieving the values and submitting by another means.
     */
    public submit?: () => Promise<void> | null;
}
