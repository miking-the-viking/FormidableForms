import { Factory } from '@/models/Formidable/Field/Core/Factory/field.factory.abstract';
import { FieldType } from '@/models/Formidable/Field/Core/field.types.enum';
import { IFormidableEmailProps } from '@/models/Formidable/Field/Email/FormidableEmail';

/**
 * Email implementation of the Factory
 */
export class EmailFactory extends Factory<IFormidableEmailProps> {
    public generate(count = 1, config = {}) {
        return new Array(count).map(x => this.buildField(config));
    }

    public buildField(config = {}): IFormidableEmailProps {
        return {
            ...this.buildBaseField(),
            fieldType: FieldType.Email,
            ...config
        } as IFormidableEmailProps;
    }
}
