import { FieldFactory } from '../core/factory/field.factory.abstract';
import { FieldType } from '../core/field.types.enum';
import { IFormidableLinkProps } from './link.props.interface';
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
