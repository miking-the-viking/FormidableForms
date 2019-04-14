import { FormidableDate } from './FormidableDate';
import { DateFactory } from './date.factory';
import { abstractFactoryTest } from '../field.factory.abstract.spec.config';

export const dateFactoryTest = () => {
    abstractFactoryTest<FormidableDate, DateFactory>(
        FormidableDate,
        DateFactory
    );
};
