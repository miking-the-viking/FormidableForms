import { FormidableText } from './FormidableText';
import { TextFactory } from './text.factory';
import { abstractFactoryTest } from '../field.factory.abstract.spec.config';

export const textFactoryTest = () => {
    abstractFactoryTest<FormidableText, TextFactory>(
        FormidableText,
        TextFactory
    );
};
