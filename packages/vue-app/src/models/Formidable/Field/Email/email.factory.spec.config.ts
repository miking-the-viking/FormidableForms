import { FormidableEmail } from './FormidableEmail';
import { EmailFactory } from './email.factory';
import { abstractFactoryTest } from '../field.factory.abstract.spec.config';

export const emailFactoryTest = () => {
    abstractFactoryTest<FormidableEmail, EmailFactory>(
        FormidableEmail,
        EmailFactory
    );
};
