/**
 * Wizard implementation of Formidable Form
 */
import { FormidableForm } from '@/models/Formidable/Form/form.abstract';
import { IsDefined, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { FormidableField } from '../Field/field.abstract';

/**
 * Formidable Wizard Definition
 * The Wizard provides a multi step-guided form
 */
export class FormidableWizardForm<T> extends FormidableForm<T> {
    /**
     * fields of the form
     */
    @IsDefined()
    @ValidateNested({ each: true })
    @Type(() => FormidableField)
    public fields!: Array<FormidableField<T>>;

}
