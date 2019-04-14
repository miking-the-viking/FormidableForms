import { FormidableTextarea } from '../Field/Textarea/FormidableTextarea';
/**
 * Wizard implementation of Formidable Form
 */
import { FormidableForm } from '@/models/Formidable/Form/form.abstract';
import { IsDefined, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { FormidableField } from '../Field/field.abstract';
import { FormidableText } from '../Field/Text/FormidableText';
import { FormidableNumber } from '../Field/Number/FormidableNumber';

/**
 * Formidable Wizard Definition
 * The Wizard provides a multi step-guided form
 */
export class FormidableWizardForm extends FormidableForm {}
