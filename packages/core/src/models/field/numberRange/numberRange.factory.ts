import { FieldType } from '../core/field.types.enum';
import { FieldFactory } from '../core/factory/field.factory.abstract';
import { IFormidableNumberRangeProps } from './numberRange.props.interface';

/**
 * Number Range Implementation of the abstract Field Factory
 */
export class NumberRangeFactory extends FieldFactory<
    IFormidableNumberRangeProps
> {
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
