import { IFormidableFieldProps } from '../core/field.props.interface';
import { FieldType } from '../core/field.types.enum';
import { FileType } from './file.type.enum';

/**
 * Props for a Formidable File
 */
export interface IFormidableFileProps extends IFormidableFieldProps<string> {
    fieldType: FieldType.File;
    maxSize?: number;
    fileType?: FileType;
}
