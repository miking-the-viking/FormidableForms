import { BasicFieldFactoryObject } from './../field.factory.abstract';
import { IFormidableEmailProps } from '@/models/Formidable/Field/Email/FormidableEmail';
import { Factory } from '../field.factory.abstract';
import { FieldType } from '../field.abstract';

export class EmailFactory extends Factory<IFormidableEmailProps> {
    public generate(count = 1, config = {}) {
        return new Array(count).map(x => this.buildField(config));
    }

    public buildField(config = {}): IFormidableEmailProps {
        return {
            ...this.buildBaseField(),
            fieldType: FieldType.Email,
            ...config
        } as IFormidableEmailProps;
    }
}
