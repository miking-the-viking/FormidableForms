import { FormidableField } from '@/models/Formidable/Field/field.abstract';

/**
 * Formidable Form definition
 */
export abstract class FormidableForm {
    public fields: Array<FormidableField<any>>;

    constructor(fields?: Array<FormidableField<any>>) {
        this.fields = fields || [];
    }
}
