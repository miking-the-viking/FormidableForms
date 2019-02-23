import { FormidableNumber } from '@/models/Formidable/Field/FormidableNumber';
import { FormidableNumberRange } from '@/models/Formidable/Field/FormidableNumberRange';
import { FormidableText } from '@/models/Formidable/Field/FormidableText';
import { FormidableTextarea } from '@/models/Formidable/Field/FormidableTextarea';
import { FormidableLink } from '@/models/Formidable/Field/FormidableLink';
import { FormidableEmail } from '@/models/Formidable/Field/FormidableEmail';
import { FormidablePassword } from '@/models/Formidable/Field/FormidablePassword';
import { FormidableDate } from '@/models/Formidable/Field/FormidableDate';
import { FieldCtorTypes } from './Formidable/Form/form.abstract';
import { IFormidableFieldProps, FieldType } from './Formidable/Field/field.abstract';
import { FormidableForm } from '@/models/Formidable/Form/form.abstract';
import { ValidationError, validate } from 'class-validator';
import { plainToClass } from 'class-transformer';
import { transformAndValidate } from 'class-transformer-validator';

export default class Validator<T extends FormidableForm> {
    public validationErrors!: ValidationError[];
    public hasAllNecessaryData!: boolean;

    constructor(private readonly validationCtor: new (...args: any[]) => object, private readonly formData: T) {
        this.validationErrors = [];
        this.hasAllNecessaryData = false;
    }

    get isValid() {
        return this.validationErrors.length === 0;
    }

    public async validate(): Promise<boolean> {
        const obj = plainToClass(this.validationCtor, this.formData);
        this.validationErrors = await validate(obj);

        if (this.validationErrors.length === 0) {
            return true;
        }
        return false;
    }

    public errorArrayHas(type: string): boolean {
        return this.validationErrors.reduce((acc: boolean, val: ValidationError) => {
            if (val.property === type) {
                return true;
            }
            return acc;
        }, false);
    }

    public async validateForm() {
        try {
            const res = await transformAndValidate(this.validationCtor, JSON.parse(JSON.stringify(this.formData)));
            this.validationErrors = [];
        } catch (e) {
            this.validationErrors = e;
        }

        await this.formData.fields
            .reduce(async (accPromise, val) => {
                return accPromise && (await this.getFieldCtor(val)).fieldIsSubmittable;
            }, Promise.resolve(true))
            .then((val) => {
                this.hasAllNecessaryData = val;
            })
            .catch((validationErrors) => {
                this.hasAllNecessaryData = false;
            });
    }

    private async getFieldCtor(fieldConfig: IFormidableFieldProps<any>): Promise<FieldCtorTypes> {
        switch (fieldConfig.fieldType) {
            case FieldType.Number:
                return await transformAndValidate(FormidableNumber, fieldConfig);
            case FieldType.NumberRange:
                return await transformAndValidate(FormidableNumberRange, fieldConfig);
            case FieldType.Text:
                return await transformAndValidate(FormidableText, fieldConfig);
            case FieldType.Textarea:
                return await transformAndValidate(FormidableTextarea, fieldConfig);
            case FieldType.Email:
                return await transformAndValidate(FormidableEmail, fieldConfig);
            case FieldType.Password:
                return await transformAndValidate(FormidablePassword, fieldConfig);
            case FieldType.Date:
                return await transformAndValidate(FormidableDate, fieldConfig);
            default:
                throw new Error(`Invalid Field Type: ${fieldConfig.fieldType}`);
        }
    }
}
