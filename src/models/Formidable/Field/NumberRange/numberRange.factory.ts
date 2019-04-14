import { BasicFieldFactoryObject } from './../field.factory.abstract';
import { IFormidableNumberRangeProps } from '@/models/Formidable/Field/NumberRange/FormidableNumberRange';
import { Factory } from '../field.factory.abstract';
import { FieldType } from '../field.abstract';

export class NumberRangeFactory extends Factory<IFormidableNumberRangeProps> {
    public generate(count = 1, config = {}) {
        return new Array(count).map(x => this.buildField(config));
    }

    public buildField(config = {}): IFormidableNumberRangeProps {
        return {
            ...this.buildBaseField(),
            fieldType: FieldType.NumberRange,
            value: {
                from: null,
                to: null
            },
            ...config
        } as IFormidableNumberRangeProps;
    }
}
