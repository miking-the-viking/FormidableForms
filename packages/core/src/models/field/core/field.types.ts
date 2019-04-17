import { IFormidableDateProps } from '../date/date.props.interface';
import { IFormidableEmailProps } from '../email/email.props.interface';
import { IFormidableFileProps } from '../file/file.props.interface';
import { IFormidableLinkProps } from '../link/link.props.interface';
import { IFormidableNumberProps } from '../number/number.props.interface';
import { IFormidableNumberRangeProps } from '../numberRange/numberRange.props.interface';
import { IFormidablePasswordProps } from '../password/password.props.interface';
import { IFormidableTextProps } from '../text/text.props.interface';
import { IFormidableTextareaProps } from '../textarea/textarea.props.interface';
import { FieldConfigType } from '../../form/core/form.types';

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
