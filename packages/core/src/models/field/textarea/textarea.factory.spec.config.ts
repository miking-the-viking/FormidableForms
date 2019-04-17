import { abstractFactoryTest } from '../core/factory/field.factory.abstract.spec.config';
import { FormidableTextarea } from './FormidableTextarea';
import { TextareaFactory } from './textarea.factory';

/**
 * Textarea Factory tests and abstract Factory implementation tests
 */
export const textareaFactoryTest = () => {
    abstractFactoryTest<FormidableTextarea, TextareaFactory>(
        FormidableTextarea,
        TextareaFactory
    );
};
