import { FormidablePassword } from './FormidablePassword';
import { PasswordFactory } from './password.factory';
import { abstractFactoryTest } from '../field.factory.abstract.spec.config';

export const passwordFactoryTest = () => {
    abstractFactoryTest<FormidablePassword, PasswordFactory>(
        FormidablePassword,
        PasswordFactory
    );
};
