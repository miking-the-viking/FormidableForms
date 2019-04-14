import { IFormidableFieldProps } from '@/models/field/core/field.props.interface';
import { FieldType } from '@/models/field/core/field.types.enum';
import { FileType } from '@/models/field/file/file.type.enum';

/**
 * Props for a Formidable File
 */
export interface IFormidableFileProps extends IFormidableFieldProps<string> {
    fieldType: FieldType.File;
    maxSize?: number;
    fileType?: FileType;
}
