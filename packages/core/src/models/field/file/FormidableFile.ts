import { FormidableField } from '@/models/field/core/field.abstract';
import { FieldType } from '@/models/field/core/field.types.enum';
import { IFormidableFileProps } from '@/models/field/file/file.props.interface';
import { FileType } from '@/models/field/file/file.type.enum';
import { IsOptional } from 'class-validator';

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
