import { FieldFactory } from '../core/factory/field.factory.abstract';
import { FieldType } from '../core/field.types.enum';
import { IFormidablePasswordProps } from './password.props.interface';

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
