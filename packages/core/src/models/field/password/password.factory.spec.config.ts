import { FormidablePassword } from '@/models/field/password/FormidablePassword';
import { PasswordFactory } from '@/models/field/password/password.factory';
import { abstractFactoryTest } from '@/models/field/core/factory/field.factory.abstract.spec.config';

/**
 * Password Factory tests and abastract Factory tests implementation
 */
export const passwordFactoryTest = () => {
    abstractFactoryTest<FormidablePassword, PasswordFactory>(
        FormidablePassword,
        PasswordFactory
    );
};
