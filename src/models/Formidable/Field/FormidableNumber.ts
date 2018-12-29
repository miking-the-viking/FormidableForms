import {
	IsOptional,
	IsNumber,
	IsEnum,
	Equals
} from 'class-validator';
import {
	FormidableField,
	IFormidableFieldProps,
	FieldType
} from '@/models/Formidable/Field/field.abstract';
import {
	IsGreaterThanOrEqualTo
} from '@/models/IsGreaterThanOrEqualTo';
import {
	IsLessThanOrEqualTo
} from '@/models/IsLessThanOrEqualTo';


/**
 * Props interface
 */
export interface IFormidableNumberProps extends IFormidableFieldProps {
	minimum ?: number;
	maximum ?: number;
}

/**
 * Formidable Field definition for a number input
 */
export class FormidableNumber extends FormidableField<number> implements IFormidableNumberProps {
	/**
	 * The value of the number
	 */
	@IsNumber() // this may not work with null, tbd.
	@IsOptional()
	@IsLessThanOrEqualTo('maximum', {
		message: (v) => 'Value must be less than specified maximum: ' + v.object.maximum

	})
	@IsGreaterThanOrEqualTo('minimum', {
		message: (v) => 'Value must be greater than specified minimum: ' + v.object.minimum
	})
	public value!: number | null;

	/**
	 * Optional minimum value
	 */
	@IsOptional()
	@IsNumber()
	@IsLessThanOrEqualTo('maximum', {
		message: (v) => 'The minimum has to be less than or equal to the maximum: ' + v.object.maximum
	})
	public minimum ?: number;

	/**
	 * Optional maximum value
	 */
	@IsOptional()
	@IsNumber()
	@IsGreaterThanOrEqualTo('minimum', {
		message: (v) => 'The maximum has to be greater than or equal to the minimum: ' + v.object.maximum
	})
	public maximum ?: number;
}