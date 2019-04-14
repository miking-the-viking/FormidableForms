import { abstractFactoryTest } from '@/models/Formidable/Field/Core/Factory/field.factory.abstract.spec.config';
import { FormidableNumber } from '@/models/Formidable/Field/Number/FormidableNumber';
import { NumberFactory } from '@/models/Formidable/Field/Number/number.factory';

/**
 * Number Factory tests, implementing the abstract Factory tests
 */
export const numberFactoryTest = () => {
    abstractFactoryTest<FormidableNumber, NumberFactory>(
        FormidableNumber,
        NumberFactory
    );
};
