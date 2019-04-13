import { FieldType } from './field.abstract';
import {
    FormidableField,
    IFormidableFieldProps
} from '@/models/Formidable/Field/field.abstract';
import { IsOptional, IsDateString } from 'class-validator';

export enum FileType {
    Image = 'image',
    Audio = 'audio',
    Video = 'video',
    PDF = 'pdf'
}

export interface IFormidableFileProps extends IFormidableFieldProps<string> {
    fieldType: FieldType.File;
    maxSize?: number;
    fileType?: FileType;
}

/**
 * Formidable Field definition for a File Input
 */
export class FormidableFile extends FormidableField<string>
    implements IFormidableFileProps {
    public fieldType: FieldType.File = FieldType.File;
    /**
     * The given value of the field
     */
    @IsOptional() public value!: string;

    public fileType?: FileType;

    get fieldIsSubmittable() {
        return this.required ? this.value != null : true;
    }
}
