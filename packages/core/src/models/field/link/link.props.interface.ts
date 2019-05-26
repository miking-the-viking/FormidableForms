import { IFormidableFieldProps } from '../core/field.props.interface';
import { FieldType } from '../core/field.types.enum';
import { ILink } from './link.interface';

/**
 * Props interface
 */
export interface IFormidableLinkProps extends IFormidableFieldProps<ILink> {
    fieldType: FieldType.Link;
    minLinkHrefLength?: number;
    maxLinkHrefLength?: number;
    minLinkTextLength?: number;
    maxLinkTextLength?: number;
}
