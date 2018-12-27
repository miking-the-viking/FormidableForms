import {
	FormidableField,
	IFormidableFieldProps
} from '@/models/Formidable/Field/field.abstract';
import {
	IsOptional,
	IsDateString
} from 'class-validator';

export enum FileType {
	Image = 'image',
	Audio = 'audio',
	Video = 'video',
	PDF = 'pdf'
}

export interface IFormidableFileProps extends IFormidableFieldProps {
	maxSize?: number;
	fileType?: FileType;
}

/**
 * Formidable Field definition for a File Input
 */
export class FormidableFile extends FormidableField<File> implements IFormidableFileProps {

	/**
	 * The given value of the field
	 */
	@IsOptional()
	public value!: File | null;


	public fileType?: FileType;
}
