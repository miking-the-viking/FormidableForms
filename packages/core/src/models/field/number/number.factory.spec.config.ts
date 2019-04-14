import { abstractFactoryTest } from '@/models/field/core/factory/field.factory.abstract.spec.config';
import { FormidableNumber } from '@/models/field/number/FormidableNumber';
import { NumberFactory } from '@/models/field/number/number.factory';

/**
 * Number Factory tests, implementing the abstract Factory tests
 */
export const numberFactoryTest = () => {
    abstractFactoryTest<FormidableNumber, NumberFactory>(
        FormidableNumber,
        NumberFactory
    );
};
