import { FormidableBasicForm } from '@/models/Formidable/Form/FormidableBasicForm';
import { FieldType } from '@/models/Formidable/Field/field.abstract';

/**
 * Basic form config for intial sample
 */
const formConfig: FormidableBasicForm = {
	fields: [
		// {
		// 	fieldType: FieldType.Number,
		// 	value: null,
		// 	label: 'Any number',
		// 	required: true
		// },
		// {
		// 	fieldType: FieldType.Number,
		// 	value: null,
		// 	minimum: -20,
		// 	label: 'Any number >= -20'
		// },
		// {
		// 	fieldType: FieldType.Number,
		// 	value: null,
		// 	minimum: 0,
		// 	maximum: 10,
		// 	label: 'Any number between 0-10'
		// },
		{
			fieldType: FieldType.Text,
			value: null,
			label: 'Any amount of string text'
		},
		// {
		// 	fieldType: FieldType.Text,
		// 	value: null,
		// 	minLength: 3,
		// 	label: 'Atleast 3 character string'
		// },
		// {
		// 	fieldType: FieldType.Text,
		// 	value: null,
		// 	maxLength: 8,
		// 	label: 'At most 8 character string'
		// },
		// {
		// 	fieldType: FieldType.Text,
		// 	value: null,
		// 	minLength: 3,
		// 	maxLength: 8,
		// 	label: 'Between 3-8 character string'
		// },
		// {
		// 	fieldType: FieldType.Textarea,
		// 	value: null,
		// 	minLength: 10,
		// 	maxLength: 500,
		// 	label: 'Between 10-500 character string'
		// },
		// {
		// 	fieldType: FieldType.Link,
		// 	value: {
		// 		text: null,
		// 		href: null
		// 	},
		// 	label: 'Some Link',
		// },
		// {
		// 	fieldType: FieldType.Email,
		// 	value: null,
		// 	label: 'Some Email',
		// },
		// {
		// 	fieldType: FieldType.Email,
		// 	value: null,
		// 	minLength: 3,
		// 	label: 'Some Email longer than 3 characters',
		// },
		// {
		// 	fieldType: FieldType.Email,
		// 	value: null,
		// 	maxLength: 30,
		// 	label: 'Some Email shorter than 30 characters',
		// },
		// {
		// 	fieldType: FieldType.Password,
		// 	value: null,
		// 	minLength: 8,
		// 	label: 'Some password field',
		// },
		// {
		// 	fieldType: FieldType.NumberRange,
		// 	value: {
		// 		from: null,
		// 		to: null
		// 	},
		// 	label: 'Number Range',
		// },
		// {
		// 	fieldType: FieldType.Date,
		// 	value: null,
		// 	label: 'Some datetime',
		// 	dateType: DateType.Datetime
		// },
		// {
		// 	fieldType: FieldType.Date,
		// 	value: null,
		// 	label: 'Some Date',
		// 	dateType: DateType.Date
		// },
		// {
		// 	fieldType: FieldType.Date,
		// 	value: null,
		// 	label: 'Some Time',
		// 	dateType: DateType.Time
		// },
		// {
		// 	fieldType: FieldType.File,
		// 	value: null,
		// 	label: 'Some file'
		// },
		// {
		// 	fieldType: FieldType.File,
		// 	fileType: FileType.Audio,
		// 	value: null,
		// 	label: 'Some audio file'
		// },
		// {
		// 	fieldType: FieldType.File,
		// 	fileType: FileType.Video,
		// 	value: null,
		// 	label: 'Some video file'
		// },
		// {
		// 	fieldType: FieldType.File,
		// 	fileType: FileType.PDF,
		// 	value: null,
		// 	label: 'Some pdf file'
		// },
		// {
		// 	fieldType: FieldType.File,
		// 	fileType: FileType.Image,
		// 	value: null,
		// 	label: 'Some image file'
		// }
	]
};

export default formConfig;
