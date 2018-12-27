import {
	FormidableField,
	IFormidableFieldProps
} from '@/models/Formidable/Field/field.abstract';
import {
	IsOptional,
	IsDate,
	IsDateString
} from 'class-validator';



export interface IFormidableDateProps extends IFormidableFieldProps {
	maxLength?: number;
	minLength?: number;
}

/**
 * Formidable Field definition for a Email input
 */
export class FormidableDate extends FormidableField<Date> implements IFormidableDateProps {

	/**
	 * The given value of the field
	 */
	// @IsDate()
	@IsDateString()
	@IsOptional()
	public value!: Date | null;

}
