import { FormidableField } from '@/models/Formidable/Field/field.abstract';

export interface ILink {
	href: string;
	text: string;
}

export class FormidableLink extends FormidableField<ILink> {

}
