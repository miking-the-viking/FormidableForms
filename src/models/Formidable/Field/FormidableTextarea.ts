import { FormidableField } from '@/models/Formidable/Field/field.abstract';
import { IsOptional, IsNumber } from 'class-validator';
import { IsLongerThan } from '@/models/IsLongerThan';
import { IsShorterThan } from '@/models/IsShorterThan';
import { IsStringOrNull } from '@/models/IsStringOrNull';

export class FormidableTextarea extends FormidableField<string> {

	/**
	 * Optional minimum length
	 */
	@IsOptional()
	@IsNumber()
	public minLength?: number;

	/**
	 * Optional maximum length
	 */
	@IsOptional()
	@IsNumber()
	public maxLength?: number;

	/**
	 * The given value of the field
	 */
	@IsLongerThan('minLength', {
		message: (v) => 'Must be longer than the specified minimum length: ' + v.object.minLength
	})
	@IsShorterThan('maxLength', {
		message: (v) => 'Must be shorter than the specified maxLength: ' + v.object.maxLength
	})
	@IsStringOrNull()
	public value!: string | null;

}
