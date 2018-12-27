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

export interface IFormidableDateProps extends IFormidableFieldProps {
	maxLength?: number;
	minLength?: number;
	dateType: DateType;
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


	public dateType!: DateType;
}
