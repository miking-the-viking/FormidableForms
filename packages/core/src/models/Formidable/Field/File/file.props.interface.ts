import { IFormidableFieldProps } from '@/models/Formidable/Field/Core/field.props.interface';
import { FieldType } from '@/models/Formidable/Field/Core/field.types.enum';
import { FileType } from '@/models/Formidable/Field/File/file.type.enum';

/**
 * Props for a Formidable File
 */
export interface IFormidableFileProps extends IFormidableFieldProps<string> {
    fieldType: FieldType.File;
    maxSize?: number;
    fileType?: FileType;
}
