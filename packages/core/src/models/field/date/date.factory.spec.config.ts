import { abstractFactoryTest } from '../core/factory/field.factory.abstract.spec.config';
import { DateFactory } from './date.factory';
import { FormidableDate } from './FormidableDate';

/**
 * Date Factory Test implementation
 */
export const dateFactoryTest = () => {
    abstractFactoryTest<FormidableDate, DateFactory>(
        FormidableDate,
        DateFactory
    );
};
