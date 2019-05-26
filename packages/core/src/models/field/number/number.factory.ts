import { FieldFactory } from '../core/factory/field.factory.abstract';
import { FieldType } from '../core/field.types.enum';
import { IFormidableNumberProps } from './number.props.interface';

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
