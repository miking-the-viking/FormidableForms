import { FieldConfigType } from '@/models/Formidable/Form/form.abstract';
import { IFormidableLinkProps } from '@/models/Formidable/Field/FormidableLink';
import { IFormidableNumberProps } from '@/models/Formidable/Field/FormidableNumber';
import { IFormidableTextProps } from '@/models/Formidable/Field/FormidableText';
import { IFormidableTextareaProps } from '@/models/Formidable/Field/FormidableTextarea';
import { IFormidablePasswordProps } from '@/models/Formidable/Field/FormidablePassword';
import { IFormidableEmailProps } from '@/models/Formidable/Field/FormidableEmail';
import { IFormidableNumberRangeProps } from '@/models/Formidable/Field/FormidableNumberRange';
import { IFormidableDateProps } from '@/models/Formidable/Field/FormidableDate';
import { IFormidableFileProps } from '@/models/Formidable/Field/FormidableFile';

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
