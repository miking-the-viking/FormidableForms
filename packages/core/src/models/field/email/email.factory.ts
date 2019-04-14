import { FieldFactory } from '@/models/field/core/factory/field.factory.abstract';
import { FieldType } from '@/models/field/core/field.types.enum';
import { IFormidableEmailProps } from '@/models/field/email/email.props.interface';

/**
 * Email implementation of the Factory
 */
export class EmailFactory extends FieldFactory<IFormidableEmailProps> {
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
