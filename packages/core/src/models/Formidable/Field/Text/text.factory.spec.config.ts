import { FormidableText } from '@/models/Formidable/Field/Text/FormidableText';
import { TextFactory } from '@/models/Formidable/Field/Text/text.factory';
import { abstractFactoryTest } from '@/models/Formidable/Field/Core/Factory/field.factory.abstract.spec.config';

/**
 * Text Factory tests and abstract Factory tests implementation
 */
export const textFactoryTest = () => {
    abstractFactoryTest<FormidableText, TextFactory>(
        FormidableText,
        TextFactory
    );
};
