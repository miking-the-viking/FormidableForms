import { Factory } from '@/models/Formidable/Field/Core/Factory/field.factory.abstract';
import { FieldType } from '@/models/Formidable/Field/Core/field.types.enum';
import { IFormidableTextProps } from '@/models/Formidable/Field/Text/text.props.interface';

/**
 * Text implementation of the abstract Factory
 */
export class TextFactory extends Factory<IFormidableTextProps> {
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
