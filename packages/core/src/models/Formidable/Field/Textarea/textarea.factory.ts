import { Factory } from '@/models/Formidable/Field/Core/Factory/field.factory.abstract';
import { FieldType } from '@/models/Formidable/Field/Core/field.types.enum';
import { IFormidableTextareaProps } from '@/models/Formidable/Field/Textarea/textarea.props.interface';

/**
 * Textarea implementation of the abstract Factory
 */
export class TextareaFactory extends Factory<IFormidableTextareaProps> {
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
