import { FormidableNumber } from './FormidableNumber';
import { NumberFactory } from './number.factory';
import { abstractFactoryTest } from '../field.factory.abstract.spec.config';

export const numberFactoryTest = () => {
    abstractFactoryTest<FormidableNumber, NumberFactory>(
        FormidableNumber,
        NumberFactory
    );
};
