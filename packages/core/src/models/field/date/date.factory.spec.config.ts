import { abstractFactoryTest } from '@/models/field/core/factory/field.factory.abstract.spec.config';
import { DateFactory } from '@/models/field/date/date.factory';
import { FormidableDate } from '@/models/field/date/FormidableDate';

/**
 * Date Factory Test implementation
 */
export const dateFactoryTest = () => {
    abstractFactoryTest<FormidableDate, DateFactory>(
        FormidableDate,
        DateFactory
    );
};
