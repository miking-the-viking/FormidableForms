import { FieldFactory } from '../core/factory/field.factory.abstract';
import { FieldType } from '../core/field.types.enum';
import { IFormidableLinkProps } from './link.props.interface';

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
                text: 'some link',
                href: 'www.google.ca'
            },
            ...config
        } as IFormidableLinkProps;
    }
}
