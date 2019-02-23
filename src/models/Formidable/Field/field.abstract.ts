/**
 * Abstract definition concerning Formidable Form Field
 */
import { IsOptional, IsString, IsBoolean } from 'class-validator';

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
export interface IFormidableFieldProps<T> {
    fieldType: FieldType;
    name?: string;
    label?: string;
    id?: string;
    required?: boolean;
    disabled?: boolean;
    value: T | null;
}

/**
 * FormidableForm Field definition
 */
export abstract class FormidableField<T> implements IFormidableFieldProps<T> {
    /**
     * The Enumerated type of the field, used for code clarity and programmatically limiting the avaialble field types
     */
    public fieldType!: FieldType;

    /**
     * Optional name of the field
     */
    @IsOptional()
    @IsString()
    public name?: string;

    /**
     * Optional label of the field
     */
    @IsOptional()
    @IsString()
    public label?: string;

    /**
     * Optional id of the field
     */
    @IsOptional()
    @IsString()
    public id?: string;

    /**
     * Whether the field is required or not
     */
    @IsOptional()
    @IsBoolean()
    public required?: boolean;

    /**
     * Whether the field is disabled or not
     */
    @IsOptional()
    @IsBoolean()
    public disabled?: boolean;

    /**
     * The given value of the field
     */
    public value!: T | null;

    abstract get fieldIsSubmittable(): boolean;

    // constructor(props: IFormidableFieldProps<T>) {
    // 	this.fieldType = props.fieldType;
    // 	this.name = props.name || undefined;
    // 	this.label = props.label || undefined;
    // 	this.id = props.id || undefined;
    // 	this.required = props.required || undefined;
    // 	this.disabled = props.disabled || undefined;
    // 	this.value = props.value;
    // }
}
