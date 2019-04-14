import { FieldFactory } from '@/models/field/core/factory/field.factory.abstract';
import { FieldType } from '@/models/field/core/field.types.enum';
import { IFormidableNumberProps } from '@/models/field/number/number.props.interface';

/**
 * Number implmentation of the Factory
 */
export class NumberFactory extends FieldFactory<IFormidableNumberProps> {
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
