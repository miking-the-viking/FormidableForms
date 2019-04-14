import { Factory } from '@/models/Formidable/Field/Core/Factory/field.factory.abstract';
import { FieldType } from '@/models/Formidable/Field/Core/field.types.enum';
import { IFormidableNumberProps } from '@/models/Formidable/Field/Number/number.props.interface';

/**
 * Number implmentation of the Factory
 */
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
