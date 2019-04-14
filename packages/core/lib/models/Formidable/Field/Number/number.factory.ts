import { BasicFieldFactoryObject } from './../field.factory.abstract';
import { IFormidableNumberProps } from '@/models/Formidable/Field/Number/FormidableNumber';
import { Factory } from '../field.factory.abstract';
import { FieldType } from '../field.abstract';

export class NumberFactory extends Factory<IFormidableNumberProps> {
    public generate(count = 1, config = {}) {
        return new Array(count).map(x => this.buildField(config));
    }

    public buildField(config = {}): IFormidableNumberProps {
        return {
            ...this.buildBaseField(),
            fieldType: FieldType.Number,
            ...config
        } as IFormidableNumberProps;
    }
}
