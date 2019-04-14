import { IFormidableDateProps } from '@/models/Formidable/Field/Date/date.props.interface';
import { IFormidableEmailProps } from '@/models/Formidable/Field/Email/email.props.interface';
import { IFormidableFileProps } from '@/models/Formidable/Field/File/file.props.interface';
import { IFormidableLinkProps } from '@/models/Formidable/Field/Link/link.props.interface';
import { IFormidableNumberProps } from '@/models/Formidable/Field/Number/number.props.interface';
import { IFormidableNumberRangeProps } from '@/models/Formidable/Field/NumberRange/numberRange.props.interface';
import { IFormidablePasswordProps } from '@/models/Formidable/Field/Password/password.props.interface';
import { IFormidableTextProps } from '@/models/Formidable/Field/Text/text.props.interface';
import { IFormidableTextareaProps } from '@/models/Formidable/Field/Textarea/textarea.props.interface';
import { FieldConfigType } from '@/models/Formidable/Form/Core/form.types';

/**
 * Conditional Field Inference
 *
 * @todo find a better way
 */
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

/**
 * Array of Conditionally Inferred Field
 */
export type ConditionallyInferredFieldArr = Array<
    ConditionallyInferredField<FieldConfigType>
>;

/**
 * Sample Map of Conditionally Typed Field Arrays
 */
export interface IFieldTypeSampleMap {
    [key: string]: ConditionallyInferredFieldArr;
}
