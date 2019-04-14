import { abstractFactoryTest } from '@/models/Formidable/Field/Core/Factory/field.factory.abstract.spec.config';
import { FormidableNumberRange } from '@/models/Formidable/Field/NumberRange/FormidableNumberRange';
import { NumberRangeFactory } from '@/models/Formidable/Field/NumberRange/numberRange.factory';

/**
 * Number Range Factory Tests and abstract Factory tests implementation
 */
export const numberRangeFactoryTest = () => {
    abstractFactoryTest<FormidableNumberRange, NumberRangeFactory>(
        FormidableNumberRange,
        NumberRangeFactory
    );
};
