import { FormidableField } from '@/models/Formidable/Field/Core/field.abstract';
import { FieldType } from '@/models/Formidable/Field/Core/field.types.enum';
import { Link } from '@/models/Formidable/Field/Link';
import { ILink } from '@/models/Formidable/Field/Link/link.interface';
import { IFormidableLinkProps } from '@/models/Formidable/Field/Link/link.props.interface';
import { IsGreaterThanOrEqualTo } from '@/models/IsGreaterThanOrEqualTo';
import { IsLessThanOrEqualTo } from '@/models/IsLessThanOrEqualTo';
import { LinkIsValid } from '@/models/LinkIsValid';
import { Type } from 'class-transformer';
import { IsNumber, IsOptional, ValidateNested } from 'class-validator';
import 'reflect-metadata';

/**
 * Formidable Link Validation Class
 */
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
