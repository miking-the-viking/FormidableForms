import { abstractFactoryTest } from '../core/factory/field.factory.abstract.spec.config';
import { FormidableNumber } from './FormidableNumber';
import { NumberFactory } from './number.factory';

/**
 * Number Factory tests, implementing the abstract Factory tests
 */
export const numberFactoryTest = () => {
    abstractFactoryTest<FormidableNumber, NumberFactory>(
        FormidableNumber,
        NumberFactory
    );
};
