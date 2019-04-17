import { validate } from 'class-validator';

import { FieldFactory } from './field.factory.abstract';
import { FormidableField } from '../field.abstract';
import { FieldConfigType } from '../../../form/core/form.types';
import { getInstance } from '../../../../utils/getInstance.function';

/**
 * Abstract Factory Tests, can simply be imported and ran in a Plug'n'Play style with any implementation
 * @param validatorCtor Corresponding validation model constructor
 * @param ctor Factory constructor
 */

export const abstractFactoryTest = <
    S extends FormidableField<any>,
    T extends FieldFactory<any>
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
