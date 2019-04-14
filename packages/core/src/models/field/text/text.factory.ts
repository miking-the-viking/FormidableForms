import { FieldFactory } from '@/models/field/core/factory/field.factory.abstract';
import { FieldType } from '@/models/field/core/field.types.enum';
import { IFormidableTextProps } from '@/models/field/text/text.props.interface';

/**
 * Text implementation of the abstract Factory
 */
export class TextFactory extends FieldFactory<IFormidableTextProps> {
    public generate(count = 1, config = {}) {
        return new Array(count).map(x => this.buildField(config));
    }

    public buildField(config = {}): IFormidableTextProps {
        return {
            ...this.buildBaseField(),
            fieldType: FieldType.Text,
            ...config
        } as IFormidableTextProps;
    }
}
