/**
 * Abstract Formidable Form core definition
 */
import {
	FormidableField,
	IFormidableFieldProps
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
export abstract class FormidableForm < T > {

	/**
	 * fields of the form
	 */
	@IsDefined()
	@ValidateNested({
		each: true
	})
	@Type(() => FormidableField)
	public fields!: Array < FormidableField < T >> ;

}
