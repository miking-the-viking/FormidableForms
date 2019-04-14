import { abstractFactoryTest } from '@/models/Formidable/Field/Core/Factory/field.factory.abstract.spec.config';
import { FormidableTextarea } from '@/models/Formidable/Field/Textarea/FormidableTextarea';
import { TextareaFactory } from '@/models/Formidable/Field/Textarea/textarea.factory';

/**
 * Textarea Factory tests and abstract Factory implementation tests
 */
export const textareaFactoryTest = () => {
    abstractFactoryTest<FormidableTextarea, TextareaFactory>(
        FormidableTextarea,
        TextareaFactory
    );
};
