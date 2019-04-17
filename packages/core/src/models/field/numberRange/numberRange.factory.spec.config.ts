import { abstractFactoryTest } from '../core/factory/field.factory.abstract.spec.config';
import { FormidableNumberRange } from './FormidableNumberRange';
import { NumberRangeFactory } from './numberRange.factory';

/**
 * Number Range Factory Tests and abstract Factory tests implementation
 */
export const numberRangeFactoryTest = () => {
    abstractFactoryTest<FormidableNumberRange, NumberRangeFactory>(
        FormidableNumberRange,
        NumberRangeFactory
    );
};
