import { FormidableTextarea } from './../Field/FormidableTextarea';
import { FormidableText } from './../Field/FormidableText';
import { FormidableNumber } from '@/models/Formidable/Field/FormidableNumber';
import { FieldType } from './../Field/field.abstract';
/**
 * Abstract Formidable Form core definition
 */
import {
	FormidableField,
	IFormidableFieldProps,
} from '@/models/Formidable/Field/field.abstract';
import {
	ValidateNested,
	IsDefined
} from 'class-validator';
import {
	Type
} from 'class-transformer';
import 'reflect-metadata';

/**
 * Basic Props for a Formidable Form
 */
export interface IFormidableFormProps {
	fields: IFormidableFieldProps[];
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
			property: 'type',
			subTypes: [
				{ value: FormidableNumber, name: FieldType.Number },
				{ value: FormidableText, name: FieldType.Text },
				{ value: FormidableTextarea, name: FieldType.Textarea }
			]
		}
	})
	public fields!: Array<FormidableNumber | FormidableText | FormidableTextarea>;

}
