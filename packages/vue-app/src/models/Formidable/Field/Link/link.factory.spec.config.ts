import { FormidableLink } from './FormidableLink';
import { LinkFactory } from './link.factory';
import { abstractFactoryTest } from '../field.factory.abstract.spec.config';

export const linkFactoryTest = () => {
    abstractFactoryTest<FormidableLink, LinkFactory>(
        FormidableLink,
        LinkFactory
    );
};
