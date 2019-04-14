import { abstractFactoryTest } from '@/models/Formidable/Field/Core/Factory/field.factory.abstract.spec.config';
import { EmailFactory } from '@/models/Formidable/Field/Email/email.factory';
import { FormidableEmail } from '@/models/Formidable/Field/Email/FormidableEmail';

/**
 * Email Factory test implementing the abstract factory tests
 */
export const emailFactoryTest = () => {
    abstractFactoryTest<FormidableEmail, EmailFactory>(
        FormidableEmail,
        EmailFactory
    );
};
