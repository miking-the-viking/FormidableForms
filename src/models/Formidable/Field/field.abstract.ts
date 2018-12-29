/**
 * Abstract definition concerning Formidable Form Field
 */
import {
	IsOptional,
	IsString,
	IsBoolean
} from 'class-validator';

/**
 * FieldType enum defines the avaialble Formidable Form Field Types
 */
export enum FieldType {
	Number = 'number',
	Text = 'text',
	Textarea = 'textarea',
	Link = 'link',
	Email = 'email',
	Password = 'password',
	NumberRange = 'numberrange',
	Date = 'date',
	Time = 'time',
	Datetime = 'datetime',
	File = 'file',
	Image = 'image',
	Audio = 'audio',
	Video = 'video'
}

/**
 * Basic props for a Formidable Field
 */
export interface IFormidableFieldProps {
	type: FieldType;
	name ?: string;
	label ?: string;
	id ?: string;
	required ?: boolean;
	disabled ?: boolean;
	value: any;
}

/**
 * FormidableForm Field definition
 */
export abstract class FormidableField<T> {

	/**
	 * The Enumerated type of the field, used for code clarity and programmatically limiting the avaialble field types
	 */
	public type!: FieldType;

	/**
	 * Optional name of the field
	 */
	@IsOptional()
	@IsString()
	public name ?: string;

	/**
	 * Optional label of the field
	 */
	@IsOptional()
	@IsString()
	public label ?: string;

	/**
	 * Optional id of the field
	 */
	@IsOptional()
	@IsString()
	public id ?: string;

	/**
	 * Whether the field is required or not
	 */
	@IsOptional()
	@IsBoolean()
	public required ?: boolean;

	/**
	 * Whether the field is disabled or not
	 */
	@IsOptional()
	@IsBoolean()
	public disabled ?: boolean;

	/**
	 * The given value of the field
	 */
	public value!: T | null;
}