import { FormidableText } from '@/models/field/text/FormidableText';
import { TextFactory } from '@/models/field/text/text.factory';
import { abstractFactoryTest } from '@/models/field/core/factory/field.factory.abstract.spec.config';

/**
 * Text Factory tests and abstract Factory tests implementation
 */
export const textFactoryTest = () => {
    abstractFactoryTest<FormidableText, TextFactory>(
        FormidableText,
        TextFactory
    );
};
