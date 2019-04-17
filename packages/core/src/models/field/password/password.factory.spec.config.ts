import { FormidablePassword } from './FormidablePassword';
import { PasswordFactory } from './password.factory';
import { abstractFactoryTest } from '../core/factory/field.factory.abstract.spec.config';

/**
 * Password Factory tests and abastract Factory tests implementation
 */
export const passwordFactoryTest = () => {
    abstractFactoryTest<FormidablePassword, PasswordFactory>(
        FormidablePassword,
        PasswordFactory
    );
};
