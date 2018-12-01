import {
    validate,
    Contains,
    IsInt,
    Length,
    IsEmail,
    IsFQDN,
    IsDate,
    Min,
    Max,
    IsDefined,
    IsEnum,
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
    File = 'file',
    Date = 'date',
    Time = 'time',
    Email = 'email',
    Password = 'password',
    Link = 'link',
    Image = 'image',
    Audio = 'audio',
    Video = 'video'
}

/**
 * FormidableForm Field definition
 */
export abstract class FormidableField {

    /**
     * The Enumerated type of the field, used for code clarity and programmatically limiting the avaialble field types
     */
    @IsEnum(FieldType)
    public type!: FieldType;

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
    public required: boolean = false;

    /**
     * Whether the field is disabled or not
     */
    @IsOptional()
    @IsBoolean()
    public disabled: boolean = false;

    /**
     * The given value of the field
     */
    public value!: any;   // TODO: Pass vlaidator options for the given value?

}
