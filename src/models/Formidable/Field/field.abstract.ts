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
export abstract class FormidableField<T> {

    /**
     * The Enumerated type of the field, used for code clarity and programmatically limiting the avaialble field types
     */
    public type!: FieldType;

    /**
     * Optional name of the field
     */
    public name?: string;

    /**
     * Optional label of the field
     */
    public label?: string;

    /**
     * Optional id of the field
     */
    public id?: string;

    /**
     * Whether the field is required or not
     */
    public required: boolean = false;

    /**
     * Whether the field is disabled or not
     */
    public disabled: boolean = false;

    /**
     * The given value of the field
     */
    public value!: T;
}
