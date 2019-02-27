import { FormidableTextarea } from './../Field/FormidableTextarea';
/**
 * Wizard implementation of Formidable Form
 */
import {
    FormidableForm
} from '@/models/Formidable/Form/form.abstract';
import {
    IsDefined,
    ValidateNested
} from 'class-validator';
import {
    Type
} from 'class-transformer';
import {
    FormidableField
} from '../Field/field.abstract';
import { FormidableText } from '../Field/FormidableText';
import { FormidableNumber } from '../Field/FormidableNumber';

/**
 * Formidable Wizard Definition
 * The Wizard provides a multi step-guided form
 */
export class FormidableWizardForm extends FormidableForm {
}
