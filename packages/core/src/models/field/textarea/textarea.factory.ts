import { FieldFactory } from '@/models/field/core/factory/field.factory.abstract';
import { FieldType } from '@/models/field/core/field.types.enum';
import { IFormidableTextareaProps } from '@/models/field/textarea/textarea.props.interface';

/**
 * Textarea implementation of the abstract Factory
 */
export class TextareaFactory extends FieldFactory<IFormidableTextareaProps> {
    public generate(count = 1, config = {}) {
        return new Array(count).map(x => this.buildField(config));
    }

    public buildField(config = {}): IFormidableTextareaProps {
        return {
            ...this.buildBaseField(),
            fieldType: FieldType.Textarea,
            ...config
        } as IFormidableTextareaProps;
    }
}
