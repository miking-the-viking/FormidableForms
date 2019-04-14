import { BasicFieldFactoryObject } from './../field.factory.abstract';
import { IFormidableTextareaProps } from '@/models/Formidable/Field/Textarea/FormidableTextarea';
import { Factory } from '../field.factory.abstract';
import { FieldType } from '../field.abstract';

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
