import {
	FormidableField,
	IFormidableFieldProps,
	FieldType
} from '@/models/Formidable/Field/field.abstract';
import {
	IsOptional,
	IsNumber,
	IsEnum,
	Equals
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


export interface IFormidableTextProps extends IFormidableFieldProps {
	maxLength ?: number;
	minLength ?: number;
}

/**
 * Formidable Field definition for a text input
 */
export class FormidableText extends FormidableField<string> implements IFormidableTextProps {

	/**
	 * Specifically only allow Number enum
	 */
	// @IsEnum(FieldType)
	// @Equals(FieldType.Text)
	public type!: FieldType;

	/**
	 * Optional minimum length
	 */
	@IsOptional()
	@IsNumber()
	public minLength ?: number;

	/**
	 * Optional maximum length
	 */
	@IsOptional()
	@IsNumber()
	public maxLength ?: number;

	/**
	 * The given value of the field
	 */
	@IsLongerThan('minLength', {
		message: 'Must be longer than the specified minLength'
	})
	@IsShorterThan('maxLength', {
		message: 'Must be shorter than the specified maxLength'
	})
	@IsStringOrNull()
	public value!: string | null;

}
