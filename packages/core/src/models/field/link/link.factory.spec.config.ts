import { FormidableLink } from './FormidableLink';
import { LinkFactory } from './link.factory';
import { abstractFactoryTest } from '../core/factory/field.factory.abstract.spec.config';

/**
 * Link Factory Tests implementing the abstract Factory tests
 *
 */
export const linkFactoryTest = () => {
    abstractFactoryTest<FormidableLink, LinkFactory>(
        FormidableLink,
        LinkFactory
    );
};
