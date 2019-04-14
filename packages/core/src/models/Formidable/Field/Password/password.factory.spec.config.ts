import { FormidablePassword } from '@/models/Formidable/Field/Password/FormidablePassword';
import { PasswordFactory } from '@/models/Formidable/Field/Password/password.factory';
import { abstractFactoryTest } from '@/models/Formidable/Field/Core/Factory/field.factory.abstract.spec.config';

/**
 * Password Factory tests and abastract Factory tests implementation
 */
export const passwordFactoryTest = () => {
    abstractFactoryTest<FormidablePassword, PasswordFactory>(
        FormidablePassword,
        PasswordFactory
    );
};
