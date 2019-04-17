import { abstractFactoryTest } from '../core/factory/field.factory.abstract.spec.config';
import { EmailFactory } from './email.factory';
import { FormidableEmail } from './FormidableEmail';

/**
 * Email Factory test implementing the abstract factory tests
 */
export const emailFactoryTest = () => {
    abstractFactoryTest<FormidableEmail, EmailFactory>(
        FormidableEmail,
        EmailFactory
    );
};
