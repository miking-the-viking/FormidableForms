import { FormidableField, IFormidableFieldProps } from '@/models/Formidable/Field/field.abstract';
import { IsOptional, IsNumber, ValidateNested } from 'class-validator';
import { LinkIsValid } from '@/models/LinkIsValid';
import { Type } from 'class-transformer';
import { Link } from './FormidableLink/Link';
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
export interface IFormidableLinkProps extends IFormidableFieldProps {
	minLinkHrefLength?: number;
	maxLinkHrefLength?: number;
	minLinkTextLength?: number;
	maxLinkTextLength?: number;
	value: ILink;
}

export class FormidableLink extends FormidableField<ILink> implements IFormidableLinkProps {

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
}