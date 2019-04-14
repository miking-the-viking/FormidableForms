import { FormidableTextarea } from './FormidableTextarea';
import { TextareaFactory } from './textarea.factory';
import { abstractFactoryTest } from '../field.factory.abstract.spec.config';

export const textareaFactoryTest = () => {
    abstractFactoryTest<FormidableTextarea, TextareaFactory>(
        FormidableTextarea,
        TextareaFactory
    );
};
