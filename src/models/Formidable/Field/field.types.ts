import { FieldConfigType } from '@/models/Formidable/Form/form.abstract';
import {
    FieldType,
    FormidableField,
    IFormidableFieldProps
} from '@/models/Formidable/Field/field.abstract';
import {
    FormidableLink,
    IFormidableLinkProps
} from '@/models/Formidable/Field/FormidableLink';
import {
    FormidableNumber,
    IFormidableNumberProps
} from '@/models/Formidable/Field/FormidableNumber';
import {
    FormidableText,
    IFormidableTextProps
} from '@/models/Formidable/Field/FormidableText';
import {
    FormidableTextarea,
    IFormidableTextareaProps
} from '@/models/Formidable/Field/FormidableTextarea';
import {
    FormidablePassword,
    IFormidablePasswordProps
} from '@/models/Formidable/Field/FormidablePassword';
import {
    FormidableEmail,
    IFormidableEmailProps
} from '@/models/Formidable/Field/FormidableEmail';
import {
    FormidableNumberRange,
    IFormidableNumberRangeProps
} from '@/models/Formidable/Field/FormidableNumberRange';
import {
    FormidableDate,
    IFormidableDateProps
} from '@/models/Formidable/Field/FormidableDate';
import {
    FormidableFile,
    IFormidableFileProps
} from '@/models/Formidable/Field/FormidableFile';

export type ConditionallyInferredField<T> = T extends IFormidableNumberProps
    ? IFormidableNumberProps
    : T extends IFormidableTextProps
        ? IFormidableTextProps
        : T extends IFormidableTextareaProps
            ? IFormidableTextareaProps
            : T extends IFormidableLinkProps
                ? IFormidableLinkProps
                : T extends IFormidableEmailProps
                    ? IFormidableEmailProps
                    : T extends IFormidablePasswordProps
                        ? IFormidablePasswordProps
                        : T extends IFormidableNumberRangeProps
                            ? IFormidableNumberRangeProps
                            : T extends IFormidableDateProps
                                ? IFormidableDateProps
                                : T extends IFormidableFileProps
                                    ? IFormidableFileProps
                                    : never;

export type ConditionallyInferredFieldArr = Array<
    ConditionallyInferredField<FieldConfigType>
>;

export interface IFieldTypeSampleMap {
    [key: string]: ConditionallyInferredFieldArr;
}
