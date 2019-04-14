import { FieldConfigType } from '@/models/Formidable/Form/form.abstract';
import { IFormidableLinkProps } from '@/models/Formidable/Field/Link/FormidableLink';
import { IFormidableNumberProps } from '@/models/Formidable/Field/Number/FormidableNumber';
import { IFormidableTextProps } from '@/models/Formidable/Field/Text/FormidableText';
import { IFormidableTextareaProps } from '@/models/Formidable/Field/Textarea/FormidableTextarea';
import { IFormidablePasswordProps } from '@/models/Formidable/Field/Password/FormidablePassword';
import { IFormidableEmailProps } from '@/models/Formidable/Field/Email/FormidableEmail';
import { IFormidableNumberRangeProps } from '@/models/Formidable/Field/NumberRange/FormidableNumberRange';
import { IFormidableDateProps } from '@/models/Formidable/Field/Date/FormidableDate';
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
