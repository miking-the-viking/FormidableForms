import { IFormidableFieldProps } from '@/models/field/core/field.props.interface';
import { FieldType } from '@/models/field/core/field.types.enum';
import { ILink } from '@/models/field/link/link.interface';

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
