import { FormidableBasicForm } from '@/models/Formidable/Form/FormidableBasicForm';
import { FieldType } from '@/models/Formidable/Field/field.abstract';

/**
 * Basic form config for intial sample
 */
const formConfig: FormidableBasicForm = {
	fields: [{
			type: FieldType.Number,
			value: null,
			label: 'Any number',
			required: true
		},
		{
			type: FieldType.Number,
			value: null,
			minimum: -20,
			label: 'Any number >= -20'
		},
		{
			type: FieldType.Number,
			value: null,
			minimum: 0,
			maximum: 10,
			label: 'Any number between 0-10'
		},
		{
			type: FieldType.Text,
			value: null,
			label: 'Any amount of string text'
		},
		{
			type: FieldType.Text,
			value: null,
			minLength: 3,
			label: 'Atleast 3 character string'
		},
		{
			type: FieldType.Text,
			value: null,
			maxLength: 8,
			label: 'At most 8 character string'
		},
		{
			type: FieldType.Text,
			value: null,
			minLength: 3,
			maxLength: 8,
			label: 'Between 3-8 character string'
		},
		{
			type: FieldType.Textarea,
			value: null,
			minLength: 10,
			maxLength: 500,
			label: 'Between 10-500 character string'
		},
		{
			type: FieldType.Link,
			value: {
				text: null,
				href: null
			},
			label: 'Some Link',
		},
		{
			type: FieldType.Email,
			value: null,
			label: 'Some Email',
		},
		{
			type: FieldType.Email,
			value: null,
			minLength: 3,
			label: 'Some Email longer than 3 characters',
		},
		{
			type: FieldType.Email,
			value: null,
			maxLength: 30,
			label: 'Some Email shorter than 30 characters',
		},
		{
			type: FieldType.Password,
			value: null,
			minLength: 8,
			label: 'Some password field',
		},
		{
			type: FieldType.NumberRange,
			value: {
				from: null,
				to: null
			},
			label: 'Number Range',
		},
		{
			type: FieldType.Date,
			value: null,
			label: 'Some date'
		}
	]
};

export default formConfig;
