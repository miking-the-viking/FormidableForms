import {
	FormidableField,
	IFormidableFieldProps,
	FieldType
} from '@/models/Formidable/Field/field.abstract';
import {
	IsOptional,
	IsNumber,
	IsEnum,
	Equals,
	IsDate
} from 'class-validator';
import {
	IsLongerThan
} from '@/models/IsLongerThan';
import {
	IsStringOrNull
} from '@/models/IsStringOrNull';
import {
	IsShorterThan
} from '@/models/IsShorterThan';
import { IsLessThanOrEqualTo } from '@/models/IsLessThanOrEqualTo';
import { IsGreaterThanOrEqualTo } from '@/models/IsGreaterThanOrEqualTo';



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
	@IsDate()
	@IsOptional()
	public value!: Date | null;

}
