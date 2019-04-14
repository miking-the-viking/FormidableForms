import { IFormidableFieldProps } from '@/models/Formidable/Field/Core/field.props.interface';
import { FieldType } from '@/models/Formidable/Field/Core/field.types.enum';
import { ILink } from '@/models/Formidable/Field/Link/link.interface';

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
