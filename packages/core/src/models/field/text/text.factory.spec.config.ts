import { FormidableText } from './FormidableText';
import { TextFactory } from './text.factory';
import { abstractFactoryTest } from '../core/factory/field.factory.abstract.spec.config';

/**
 * Text Factory tests and abstract Factory tests implementation
 */
export const textFactoryTest = () => {
    abstractFactoryTest<FormidableText, TextFactory>(
        FormidableText,
        TextFactory
    );
};
