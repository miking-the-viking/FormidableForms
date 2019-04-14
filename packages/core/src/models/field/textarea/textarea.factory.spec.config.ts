import { abstractFactoryTest } from '@/models/field/core/factory/field.factory.abstract.spec.config';
import { FormidableTextarea } from '@/models/field/textarea/FormidableTextarea';
import { TextareaFactory } from '@/models/field/textarea/textarea.factory';

/**
 * Textarea Factory tests and abstract Factory implementation tests
 */
export const textareaFactoryTest = () => {
    abstractFactoryTest<FormidableTextarea, TextareaFactory>(
        FormidableTextarea,
        TextareaFactory
    );
};
