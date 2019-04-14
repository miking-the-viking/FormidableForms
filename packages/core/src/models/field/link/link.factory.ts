import { FieldFactory } from '@/models/field/core/factory/field.factory.abstract';
import { FieldType } from '@/models/field/core/field.types.enum';
import { IFormidableLinkProps } from '@/models/field/link/link.props.interface';
import faker from 'faker';

/**
 * Link implementation of the Factory
 */
export class LinkFactory extends FieldFactory<IFormidableLinkProps> {
    public generate(count = 1, config = {}) {
        return new Array(count).map(x => this.buildField(config));
    }

    public buildField(config = {}): IFormidableLinkProps {
        return {
            ...this.buildBaseField(),
            fieldType: FieldType.Link,
            value: {
                text: faker.lorem.words(6),
                href: faker.internet.url()
            },
            ...config
        } as IFormidableLinkProps;
    }
}
