import { IFieldTypeSampleMap } from '@/models/Formidable/Field/field.types';
import { FormType } from '@/models/Formidable/Form/form.abstract';
import { FormidableBasicForm } from '@/models/Formidable/Form/FormidableBasicForm';
import { FieldType } from '@/models/Formidable/Field/field.abstract';
import { FileType } from '@/models/Formidable/Field/FormidableFile';

const SAMPLES: IFieldTypeSampleMap = {
    [FieldType.Number]: [
        {
            fieldType: FieldType.Number,
            value: null,
            label: 'Any number (required)',
            required: true
        },
        {
            fieldType: FieldType.Number,
            value: null,
            minimum: -20,
            label: 'Any number >= -20 (optional)'
        },
        {
            fieldType: FieldType.Number,
            value: null,
            minimum: 0,
            maximum: 10,
            label: 'Any number between 0-10 (optional)'
        }
    ],
    [FieldType.Text]: [
        {
            fieldType: FieldType.Text,
            value: null,
            label: 'Any amount of string text (required)',
            required: true
        },
        {
            fieldType: FieldType.Text,
            value: null,
            label: 'Any amount of string text (optional)'
        },
        {
            fieldType: FieldType.Text,
            value: null,
            minLength: 3,
            label: 'Atleast 3 character string (optional)'
        },
        {
            fieldType: FieldType.Text,
            value: null,
            maxLength: 8,
            label: 'At most 8 character string (optional)'
        },
        {
            fieldType: FieldType.Text,
            value: null,
            minLength: 3,
            maxLength: 8,
            label: 'Between 3-8 character string (optional)'
        }
    ],
    [FieldType.Textarea]: [
        {
            fieldType: FieldType.Textarea,
            value: null,
            maxLength: 150,
            label: 'Between 0-150 character string (required)',
            required: true
        },
        {
            fieldType: FieldType.Textarea,
            value: null,
            minLength: 10,
            maxLength: 500,
            label: 'Between 10-500 character string (optional)'
        }
    ],
    [FieldType.Link]: [
        {
            fieldType: FieldType.Link,
            value: {
                text: null,
                href: null
            },
            label: 'Some Link (required)',
            required: true
        },
        {
            fieldType: FieldType.Link,
            value: {
                text: null,
                href: null
            },
            label: 'Some Link (optional)'
        }
    ],
    [FieldType.Email]: [
        {
            fieldType: FieldType.Email,
            value: null,
            label: 'Some Email (required)',
            required: true
        },
        {
            fieldType: FieldType.Email,
            value: null,
            label: 'Some Email (optional)'
        },
        {
            fieldType: FieldType.Email,
            value: null,
            minLength: 3,
            label: 'Some Email longer than 3 characters (optional)'
        },
        {
            fieldType: FieldType.Email,
            value: null,
            maxLength: 30,
            label: 'Some Email shorter than 30 characters (optional)'
        }
    ],
    [FieldType.Password]: [
        {
            fieldType: FieldType.Password,
            value: null,
            label: 'Some password field (required)',
            required: true
        },
        {
            fieldType: FieldType.Password,
            value: null,
            minLength: 8,
            label: 'Some password field (optional, min length 8)'
        }
    ],
    [FieldType.NumberRange]: [
        {
            fieldType: FieldType.NumberRange,
            value: {
                from: null,
                to: null
            },
            label: 'Number Range (optional)'
        }
    ],
    [FieldType.Date]: [
        // {
        //     fieldType: FieldType.Date,
        //     value: null,
        //     label: 'Some datetime (optional)',
        //     dateType: DateType.Datetime
        // },
        // {
        //     fieldType: FieldType.Date,
        //     value: null,
        //     label: 'Some Date (optional)',
        //     dateType: DateType.Date
        // },
        // {
        //     fieldType: FieldType.Date,
        //     value: null,
        //     label: 'Some Time (optional)',
        //     dateType: DateType.Time
        // },
    ],
    [FieldType.File]: [
        {
            fieldType: FieldType.File,
            value: null,
            label: 'Some file (required)',
            required: true
        },
        {
            fieldType: FieldType.File,
            fileType: FileType.Audio,
            value: null,
            label: 'Some audio file (optional)'
        },
        {
            fieldType: FieldType.File,
            fileType: FileType.Video,
            value: null,
            label: 'Some video file (optional)'
        },
        {
            fieldType: FieldType.File,
            fileType: FileType.PDF,
            value: null,
            label: 'Some pdf file (optional)'
        },
        {
            fieldType: FieldType.File,
            fileType: FileType.Image,
            value: null,
            label: 'Some image file (optional)'
        }
    ]
};

/**
 * Basic form config for intial sample
 */
const formConfig = (type: FieldType): FormidableBasicForm => {
    const fields = SAMPLES[type] || [];
    return {
        type: FormType.Basic,
        fields
    } as FormidableBasicForm;
};

export const FIELDS = Object.keys(FieldType).map(val => FieldType[val as any]);

export default formConfig;
