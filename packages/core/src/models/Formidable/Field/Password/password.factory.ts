import { Factory } from '@/models/Formidable/Field/Core/Factory/field.factory.abstract';
import { FieldType } from '@/models/Formidable/Field/Core/field.types.enum';
import { IFormidablePasswordProps } from '@/models/Formidable/Field/Password/password.props.interface';

/**
 * Password implementation of tha abstract Factory
 */
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
