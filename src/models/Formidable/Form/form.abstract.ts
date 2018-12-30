/**
 * Abstract Formidable Form core definition
 */
import 'reflect-metadata';
import { Type } from 'class-transformer';
import { IsDefined, ValidateNested } from 'class-validator';
import { FieldType, FormidableField, IFormidableFieldProps } from '@/models/Formidable/Field/field.abstract';
import { FormidableLink } from '@/models/Formidable/Field/FormidableLink';
import { FormidableNumber } from '@/models/Formidable/Field/FormidableNumber';
import { FormidableText } from '@/models/Formidable/Field/FormidableText';
import { FormidableTextarea } from '@/models/Formidable/Field/FormidableTextarea';
import { FormidablePassword } from '@/models/Formidable/Field/FormidablePassword';
import { FormidableEmail } from '@/models/Formidable/Field/FormidableEmail';
import { FormidableNumberRange } from '@/models/Formidable/Field/FormidableNumberRange';
import { FormidableDate } from '@/models/Formidable/Field/FormidableDate';
import { FormidableFile } from '@/models/Formidable/Field/FormidableFile';

/**
 * Basic Props for a Formidable Form
 */
export interface IFormidableFormProps {
	fields: Array<IFormidableFieldProps<any>>;
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
				{ value: FormidableFile, name: FieldType.File },
			]
		}
	})
	public fields!: Array<
		FormidableNumber
		| FormidableText
		| FormidableTextarea
		| FormidableLink
		| FormidableEmail
		| FormidablePassword
		| FormidableNumberRange
		| FormidableDate
		| FormidableFile
	>;

	/**
	 * Submit action for the form, optional or null if retrieving the values and submitting by another means.
	 */
	public submit?: () => Promise<void> | null;

}
