import { abstractFactoryTest } from '@/models/field/core/factory/field.factory.abstract.spec.config';
import { FormidableNumberRange } from '@/models/field/numberRange/FormidableNumberRange';
import { NumberRangeFactory } from '@/models/field/numberRange/numberRange.factory';

/**
 * Number Range Factory Tests and abstract Factory tests implementation
 */
export const numberRangeFactoryTest = () => {
    abstractFactoryTest<FormidableNumberRange, NumberRangeFactory>(
        FormidableNumberRange,
        NumberRangeFactory
    );
};
