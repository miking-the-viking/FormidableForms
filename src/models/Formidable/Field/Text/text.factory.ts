import { BasicFieldFactoryObject } from './../field.factory.abstract';
import { IFormidableTextProps } from '@/models/Formidable/Field/Text/FormidableText';
import { Factory } from '../field.factory.abstract';
import { FieldType } from '../field.abstract';

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
