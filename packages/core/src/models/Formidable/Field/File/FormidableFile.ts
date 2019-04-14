import { FormidableField } from '@/models/Formidable/Field/Core/field.abstract';
import { FieldType } from '@/models/Formidable/Field/Core/field.types.enum';
import { IFormidableFileProps } from '@/models/Formidable/Field/File/file.props.interface';
import { FileType } from '@/models/Formidable/Field/File/file.type.enum';
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
