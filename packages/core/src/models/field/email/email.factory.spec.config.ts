import { abstractFactoryTest } from '@/models/field/core/factory/field.factory.abstract.spec.config';
import { EmailFactory } from '@/models/field/email/email.factory';
import { FormidableEmail } from '@/models/field/email/FormidableEmail';

/**
 * Email Factory test implementing the abstract factory tests
 */
export const emailFactoryTest = () => {
    abstractFactoryTest<FormidableEmail, EmailFactory>(
        FormidableEmail,
        EmailFactory
    );
};
