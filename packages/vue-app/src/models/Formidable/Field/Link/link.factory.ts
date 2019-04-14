import { BasicFieldFactoryObject } from './../field.factory.abstract';
import { IFormidableLinkProps } from '@/models/Formidable/Field/Link/FormidableLink';
import { Factory } from '../field.factory.abstract';
import { FieldType } from '../field.abstract';
import faker from 'faker';

export class LinkFactory extends Factory<IFormidableLinkProps> {
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
