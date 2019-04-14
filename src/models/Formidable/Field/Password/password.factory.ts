import { BasicFieldFactoryObject } from './../field.factory.abstract';
import { IFormidablePasswordProps } from '@/models/Formidable/Field/Password/FormidablePassword';
import { Factory } from '../field.factory.abstract';
import { FieldType } from '../field.abstract';

export class PasswordFactory extends Factory<IFormidablePasswordProps> {
    public generate(count = 1, config = {}) {
        return new Array(count).map(x => this.buildField(config));
    }

    public buildField(config = {}): IFormidablePasswordProps {
        return {
            ...this.buildBaseField(),
            fieldType: FieldType.Password,
            ...config
        } as IFormidablePasswordProps;
    }
}
