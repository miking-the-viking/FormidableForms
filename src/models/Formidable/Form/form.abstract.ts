import { FormidableField } from '@/models/Formidable/Field/field.abstract';

/**
 * Formidable Form definition
 */
export abstract class FormidableForm {
    public fields: FormidableField[];

    constructor(fields?: FormidableField[]) {
        this.fields = fields || [];
    }
}
