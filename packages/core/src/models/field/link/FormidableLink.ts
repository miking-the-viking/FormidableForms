import { Type } from 'class-transformer';
import { IsNumber, IsOptional, ValidateNested } from 'class-validator';
import 'reflect-metadata';

import { FormidableField } from '../core/field.abstract';
import { FieldType } from '../core/field.types.enum';
import { Link } from '.';
import { ILink } from './link.interface';
import { IFormidableLinkProps } from './link.props.interface';
import { IsGreaterThanOrEqualTo } from '../../../validation/decorators/IsGreaterThanOrEqualTo';
import { IsLessThanOrEqualTo } from '../../../validation/decorators/IsLessThanOrEqualTo';
import { LinkIsValid } from '../../../validation/decorators/LinkIsValid';

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
