import {
    FormidableField,
    IFormidableFieldProps,
    FieldType
} from '@/models/Formidable/Field/field.abstract';
import { IsOptional, IsNumber, ValidateNested } from 'class-validator';
import { LinkIsValid } from '@/models/LinkIsValid';
import { Type } from 'class-transformer';
import { Link } from './Link';
import 'reflect-metadata';
import { IsGreaterThanOrEqualTo } from '@/models/IsGreaterThanOrEqualTo';
import { IsLessThanOrEqualTo } from '@/models/IsLessThanOrEqualTo';

export interface ILink {
    href: string | null;
    text: string | null;
}

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

export class FormidableLink extends FormidableField<ILink>
    implements IFormidableLinkProps {
    public fieldType: FieldType.Link = FieldType.Link;

    @IsOptional()
    @IsNumber()
    @IsLessThanOrEqualTo('maxLinkHrefLength')
    public minLinkHrefLength?: number;

    @IsOptional()
    @IsNumber()
    @IsGreaterThanOrEqualTo('minLinkHrefLength')
    public maxLinkHrefLength?: number;

    @IsOptional()
    @IsNumber()
    @IsLessThanOrEqualTo('maxLinkTextLength')
    public minLinkTextLength?: number;

    @IsOptional()
    @IsNumber()
    @IsGreaterThanOrEqualTo('minLinkTextLength')
    public maxLinkTextLength?: number;

    @LinkIsValid()
    @ValidateNested()
    @Type(() => Link)
    public value!: ILink;

    get fieldIsSubmittable() {
        return this.required
            ? this.value.href != null && this.value.text != null
            : true;
    }
}
