import { FormidableEmail } from '@/models/Formidable/Field/FormidableEmail';
/**
 * Abstract Formidable Form core definition
 */
import { FieldType, FormidableField, IFormidableFieldProps } from '@/models/Formidable/Field/field.abstract';
import { FormidableLink } from '@/models/Formidable/Field/FormidableLink';
import { FormidableNumber } from '@/models/Formidable/Field/FormidableNumber';
import { FormidableText } from '@/models/Formidable/Field/FormidableText';
import { FormidableTextarea } from '@/models/Formidable/Field/FormidableTextarea';
import { Type } from 'class-transformer';
import { IsDefined, ValidateNested } from 'class-validator';
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
				{ value: FormidableTextarea, name: FieldType.Textarea },
				{ value: FormidableLink, name: FieldType.Link },
				{ value: FormidableEmail, name: FieldType.Email }
			]
		}
	})
	public fields!: Array<
		FormidableNumber
		| FormidableText
		| FormidableTextarea
		| FormidableLink
		| FormidableEmail
	>;

}
