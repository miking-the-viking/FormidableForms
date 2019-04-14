import { FieldFactory } from '@/models/field/core/factory/field.factory.abstract';
import { FieldType } from '@/models/field/core/field.types.enum';
import { IFormidablePasswordProps } from '@/models/field/password/password.props.interface';

/**
 * Password implementation of tha abstract Factory
 */
export class PasswordFactory extends FieldFactory<IFormidablePasswordProps> {
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
