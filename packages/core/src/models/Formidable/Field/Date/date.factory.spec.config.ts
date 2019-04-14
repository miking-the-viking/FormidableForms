import { abstractFactoryTest } from '@/models/Formidable/Field/Core/Factory/field.factory.abstract.spec.config';
import { DateFactory } from '@/models/Formidable/Field/Date/date.factory';
import { FormidableDate } from '@/models/Formidable/Field/Date/FormidableDate';

/**
 * Date Factory Test implementation
 */
export const dateFactoryTest = () => {
    abstractFactoryTest<FormidableDate, DateFactory>(
        FormidableDate,
        DateFactory
    );
};
