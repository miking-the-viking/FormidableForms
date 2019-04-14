import { FieldType, IFormidableFieldProps } from './field.abstract';
import {
    getInstance,
    FieldConfigType
} from '@/models/Formidable/Form/form.abstract';
import { transformAndValidate } from 'class-transformer-validator';
import { FormidableField } from '@/models/Formidable/Field/field.abstract';
import { Factory } from '@/models/Formidable/Field/field.factory.abstract';
import { validate } from 'class-validator';
import { plainToClass } from 'class-transformer';

export const abstractFactoryTest = <
    S extends FormidableField<any>,
    T extends Factory<any>
>(
    validatorCtor: new (...args: any[]) => S,
    ctor: new (...args: any[]) => T
) => {
    describe('Formidable Factory {{name?}}', () => {
        let factory: T;

        beforeAll(() => {
            factory = new ctor();
        });

        describe('Factory Initialization', () => {
            it('Can initialize the factory', () => {
                const f = new ctor();
            });
        });

        describe('Factory Usage', () => {
            describe('Validity of Factory Output', () => {
                let config: FieldConfigType & T;
                beforeAll(() => {
                    config = factory.buildField();
                });

                it('Generates valid objects for the given validatorCtor using buildField', async () => {
                    const instance = await getInstance({
                        ...config
                    });

                    expect(instance).toBeInstanceOf(validatorCtor);
                    const errs = await validate(instance);
                    expect(errs).toHaveLength(0);
                });

                describe('generate N', () => {
                    let configs: any[];
                    const NUM_TO_GENERATE = 50;
                    it(`Generates ${NUM_TO_GENERATE} valid objects`, async () => {
                        configs = factory.generate(NUM_TO_GENERATE);
                        expect(configs).toHaveLength(NUM_TO_GENERATE);

                        // TODO validate the objects, it uses buildField so that should be fine
                    });
                });
            });
        });
    });
};
