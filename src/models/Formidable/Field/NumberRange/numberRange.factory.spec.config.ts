import { FormidableNumberRange } from './FormidableNumberRange';
import { NumberRangeFactory } from './numberRange.factory';
import { abstractFactoryTest } from '../field.factory.abstract.spec.config';

export const numberRangeFactoryTest = () => {
    abstractFactoryTest<FormidableNumberRange, NumberRangeFactory>(
        FormidableNumberRange,
        NumberRangeFactory
    );
};
