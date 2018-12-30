import {
	FormidableField,
	IFormidableFieldProps
} from '@/models/Formidable/Field/field.abstract';
import {
	IsOptional,
	IsDateString
} from 'class-validator';

export enum DateType {
	Datetime = 'datetime',
	Date = 'date',
	Time = 'time'
}

export interface IFormidableDateProps extends IFormidableFieldProps<string> {
	dateType: DateType;
}

/**
 * Formidable Field definition for a Date input
 */
export class FormidableDate extends FormidableField<string> implements IFormidableDateProps {

	/**
	 * The given value of the field
	 */
	@IsDateString({
		message: (val) => 'Please select a valid date.'
	})
	@IsOptional()
	public value!: string;


	public dateType!: DateType;
}
