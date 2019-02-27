import { FormidableBasicForm } from '@/models/Formidable/Form/FormidableBasicForm';
import { FieldType } from '@/models/Formidable/Field/field.abstract';
import { DateType } from '@/models/Formidable/Field/FormidableDate';
import { FileType } from '@/models/Formidable/Field/FormidableFile';
import { FormType } from '@/models/Formidable/Form/form.abstract';

/**
 * Basic form config for intial sample
 */
const formConfig: FormidableBasicForm = {
    formType: FormType.Basic,
    fields: [
        // {
        // 	fieldType: FieldType.Number,
        // 	value: null,
        // 	label: 'Any number (required)',
        // 	required: true
        // },
        // {
        // 	fieldType: FieldType.Number,
        // 	value: null,
        // 	minimum: -20,
        // 	label: 'Any number >= -20 (optional)'
        // },
        // {
        // 	fieldType: FieldType.Number,
        // 	value: null,
        // 	minimum: 0,
        // 	maximum: 10,
        // 	label: 'Any number between 0-10 (optional)'
        // },
        // {
        // 	fieldType: FieldType.Text,
        // 	value: null,
        // 	label: 'Any amount of string text (required)',
        // 	required: true
        // },
        // {
        // 	fieldType: FieldType.Text,
        // 	value: null,
        // 	label: 'Any amount of string text (optional)'
        // },
        // {
        //     fieldType: FieldType.Text,
        //     value: null,
        //     minLength: 3,
        //     label: 'Atleast 3 character string (optional)'
        // },
        {
            value: null,
            minimum: 4,
            fieldType: FieldType.Number
        }
        // {
        // 	fieldType: FieldType.Text,
        // 	value: null,
        // 	maxLength: 8,
        // 	label: 'At most 8 character string (optional)'
        // },
        // {
        // 	fieldType: FieldType.Text,
        // 	value: null,
        // 	minLength: 3,
        // 	maxLength: 8,
        // 	label: 'Between 3-8 character string (optional)'
        // },
        // {
        // 	fieldType: FieldType.Textarea,
        // 	value: null,
        // 	maxLength: 150,
        // 	label: 'Between 0-150 character string (required)',
        // 	required: true
        // },
        // {
        // 	fieldType: FieldType.Textarea,
        // 	value: null,
        // 	minLength: 10,
        // 	maxLength: 500,
        // 	label: 'Between 10-500 character string (optional)'
        // },
        // {
        // 	fieldType: FieldType.Link,
        // 	value: {
        // 		text: null,
        // 		href: null
        // 	},
        // 	label: 'Some Link (required)',
        // 	required: true
        // },
        // {
        // 	fieldType: FieldType.Link,
        // 	value: {
        // 		text: null,
        // 		href: null
        // 	},
        // 	label: 'Some Link (optional)',
        // },
        // {
        // 	fieldType: FieldType.Email,
        // 	value: null,
        // 	label: 'Some Email (required)',
        // 	required: true
        // },
        // {
        // 	fieldType: FieldType.Email,
        // 	value: null,
        // 	label: 'Some Email (optional)',
        // },
        // {
        // 	fieldType: FieldType.Email,
        // 	value: null,
        // 	minLength: 3,
        // 	label: 'Some Email longer than 3 characters (optional)',
        // },
        // {
        // 	fieldType: FieldType.Email,
        // 	value: null,
        // 	maxLength: 30,
        // 	label: 'Some Email shorter than 30 characters (optional)',
        // },
        // {
        // 	fieldType: FieldType.Password,
        // 	value: null,
        // 	label: 'Some password field (required)',
        // 	required: true
        // },
        // {
        // 	fieldType: FieldType.Password,
        // 	value: null,
        // 	minLength: 8,
        // 	label: 'Some password field (optional, min length 8)',
        // },
        // {
        // 	fieldType: FieldType.NumberRange,
        // 	value: {
        // 		from: null,
        // 		to: null
        // 	},
        // 	label: 'Number Range (optional)',
        // },
        // {
        // 	fieldType: FieldType.Date,
        // 	value: null,
        // 	label: 'Some datetime (optional)',
        // 	dateType: DateType.Datetime
        // },
        // {
        // 	fieldType: FieldType.Date,
        // 	value: null,
        // 	label: 'Some Date (optional)',
        // 	dateType: DateType.Date
        // },
        // {
        // 	fieldType: FieldType.Date,
        // 	value: null,
        // 	label: 'Some Time (optional)',
        // 	dateType: DateType.Time
        // },
        // {
        // 	fieldType: FieldType.File,
        // 	value: null,
        // 	label: 'Some file (required)',
        // 	required: true
        // },
        // {
        // 	fieldType: FieldType.File,
        // 	fileType: FileType.Audio,
        // 	value: null,
        // 	label: 'Some audio file (optional)'
        // },
        // {
        // 	fieldType: FieldType.File,
        // 	fileType: FileType.Video,
        // 	value: null,
        // 	label: 'Some video file (optional)'
        // },
        // {
        // 	fieldType: FieldType.File,
        // 	fileType: FileType.PDF,
        // 	value: null,
        // 	label: 'Some pdf file (optional)'
        // },
        // {
        // 	fieldType: FieldType.File,
        // 	fileType: FileType.Image,
        // 	value: null,
        // 	label: 'Some image file (optional)'
        // }
    ]
};

export default formConfig;
