import { IsOptional } from 'class-validator';

import { FormidableField } from '../core/field.abstract';
import { FieldType } from '../core/field.types.enum';
import { IFormidableFileProps } from './file.props.interface';
import { FileType } from './file.type.enum';

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
