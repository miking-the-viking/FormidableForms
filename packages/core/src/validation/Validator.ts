import { IFormidableFieldProps } from './../models/field/core/field.props.interface';
import { ValidationError, validate } from 'class-validator';
import { plainToClass } from 'class-transformer';
import { transformAndValidate } from 'class-transformer-validator';
import { FieldType } from '../models/field/core/field.types.enum';
import { FormidableNumber } from '../models/field/number/FormidableNumber';
import { FormidableNumberRange } from '../models/field/numberRange/FormidableNumberRange';
import { FormidableText } from '../models/field/text/FormidableText';
import { FormidableTextarea } from '../models/field/textarea/FormidableTextarea';
import { FormidableEmail } from '../models/field/email/FormidableEmail';
import { FormidablePassword } from '../models/field/password/FormidablePassword';
import { FormidableDate } from '../models/field/date/FormidableDate';
import { FormidableFile } from '../models/field/file/FormidableFile';
import { FormidableLink } from '../models/field/link/FormidableLink';
import { FieldCtorType } from '../models/form/core/form.types';

/**
 * Validator Class for the custom field and form models
 */
export class Validator {
    public validationErrors!: ValidationError[];

    constructor(
        private readonly validationCtor: new (...args: any[]) => object,
        public formData: {}
    ) {
        this.validationErrors = [];
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
        return this.validationErrors.reduce(
            (acc: boolean, val: ValidationError) => {
                if (val.property === type) {
                    return true;
                }
                return acc;
            },
            false
        );
    }

    public async getFieldCtor(
        fieldConfig: IFormidableFieldProps<any>
    ): Promise<FieldCtorType> {
        switch (fieldConfig.fieldType) {
            case FieldType.Number:
                return await transformAndValidate(
                    FormidableNumber,
                    fieldConfig
                );
            case FieldType.NumberRange:
                return await transformAndValidate(
                    FormidableNumberRange,
                    fieldConfig
                );
            case FieldType.Text:
                return await transformAndValidate(FormidableText, fieldConfig);
            case FieldType.Textarea:
                return await transformAndValidate(
                    FormidableTextarea,
                    fieldConfig
                );
            case FieldType.Email:
                return await transformAndValidate(FormidableEmail, fieldConfig);
            case FieldType.Password:
                return await transformAndValidate(
                    FormidablePassword,
                    fieldConfig
                );
            case FieldType.Date:
                return await transformAndValidate(FormidableDate, fieldConfig);
            case FieldType.File:
                return await transformAndValidate(FormidableFile, fieldConfig);
            case FieldType.Link:
                return await transformAndValidate(FormidableLink, fieldConfig);
            default:
                throw new Error(`Invalid Field Type: ${fieldConfig.fieldType}`);
        }
    }
}
