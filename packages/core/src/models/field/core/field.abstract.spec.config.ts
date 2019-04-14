import { FieldFactory } from '@/models/field/core/factory/field.factory.abstract';
import { FormidableField } from '@/models/field/core/field.abstract';
import { IFormidableFieldProps } from '@/models/field/core/field.props.interface';
import { FieldType } from '@/models/field/core/field.types.enum';
import { getInstance } from '@/utils/getInstance.function';
import errorArrayHas from '@/utils/testing/errorArrayHas.function';
import { transformAndValidate } from 'class-transformer-validator';

/**
 * Abstract Formidable Field Tests, can be imported and executed in a Plug'n'Play style for its implementations
 */
export default <T extends IFormidableFieldProps<any>>(
    ctor: new (...args: any[]) => FormidableField<any>,
    factoryCtor: new (...args: any[]) => FieldFactory<T>
) => {
    describe(`Formidable Form Field Core Test for ${
        ctor.name
    } Implementation`, () => {
        let factory: FieldFactory<T>;
        let validConfigs: T[];
        beforeEach(() => {
            factory = new factoryCtor();
            validConfigs = factory.generate(1);
        });

        describe('Field Initialization', () => {
            // describe('Field Type Prop', () => {
            // 	it('throws an error when an invalid FieldType is used', async () => {

            // 		const invalidType = {fieldType: 'someInvalidType'};

            // 		try {
            // 			await transformAndValidate(ctor, invalidType);
            // 			fail(`Did not throw a validator error when using an invalid field type ${invalidType.type}`);
            // 		} catch (e) {
            // 			expect(e).toBeInstanceOf(Array);
            // 			expect(errorArrayHas('fieldType', e)).toBeTruthy();
            // 		}
            // 	});

            // });

            describe('Object to Instance', () => {
                describe('Valid Configuration Objects', () => {
                    it('Can call getInstance to get an initialized instance of the field type', async () => {
                        const fieldConfig = factory.buildField();
                        const instance = await getInstance(fieldConfig);
                        expect(instance).toBeInstanceOf(FormidableField);
                    });
                });

                it('Throws an error for an invalid configuration', async () => {
                    const invalidFieldType = {
                        ...validConfigs[0],
                        fieldType: ('test' + Date.now) as FieldType.Number
                    };
                    expect(getInstance(invalidFieldType)).rejects.toThrow();
                    expect(getInstance(invalidFieldType)).rejects.toThrowError(
                        Error(
                            `Invalid Formidable Field Type: ${
                                invalidFieldType.fieldType
                            }`
                        )
                    );
                });
            });

            describe('Name Prop', () => {
                describe('Errors are thrown when an invalid name prop is used', () => {
                    it('number', async () => {
                        const invalidName = { name: -1 };

                        try {
                            await transformAndValidate(ctor, invalidName);
                            fail(
                                `Did not throw a validator error when using an invalid name prop ${
                                    invalidName.name
                                }`
                            );
                        } catch (e) {
                            expect(e).toBeInstanceOf(Array);
                            expect(errorArrayHas('name', e)).toBeTruthy();
                        }
                    });

                    it('boolean', async () => {
                        const invalidName = { name: false };

                        try {
                            await transformAndValidate(ctor, invalidName);
                            fail(
                                `Did not throw a validator error when using an invalid name prop ${
                                    invalidName.name
                                }`
                            );
                        } catch (e) {
                            expect(e).toBeInstanceOf(Array);
                            expect(errorArrayHas('name', e)).toBeTruthy();
                        }
                    });

                    it('object', async () => {
                        const invalidName = { name: {} };

                        try {
                            await transformAndValidate(ctor, invalidName);
                            fail(
                                `Did not throw a validator error when using an invalid name prop ${
                                    invalidName.name
                                }`
                            );
                        } catch (e) {
                            expect(e).toBeInstanceOf(Array);
                            expect(errorArrayHas('name', e)).toBeTruthy();
                        }
                    });
                });

                it('Accepts a string name', async () => {
                    const validName = { name: 'test' };

                    try {
                        await transformAndValidate(ctor, validName);
                    } catch (e) {
                        expect(e).toBeInstanceOf(Array);
                        expect(!errorArrayHas('name', e)).toBeTruthy();
                    }
                });
            });

            describe('Label Prop', () => {
                describe('Errors are thrown when an invalid label prop is used', () => {
                    it('number', async () => {
                        const invalidLabel = { label: -1 };

                        try {
                            await transformAndValidate(ctor, invalidLabel);
                            // tslint:disable-next-line:max-line-length
                            fail(
                                `Did not throw a validator error when using an invalid label prop ${
                                    invalidLabel.label
                                }`
                            );
                        } catch (e) {
                            expect(e).toBeInstanceOf(Array);
                            expect(errorArrayHas('label', e)).toBeTruthy();
                        }
                    });

                    it('boolean', async () => {
                        const invalidLabel = { label: false };

                        try {
                            await transformAndValidate(ctor, invalidLabel);
                            // tslint:disable-next-line:max-line-length
                            fail(
                                `Did not throw a validator error when using an invalid label prop ${
                                    invalidLabel.label
                                }`
                            );
                        } catch (e) {
                            expect(e).toBeInstanceOf(Array);
                            expect(errorArrayHas('label', e)).toBeTruthy();
                        }
                    });

                    it('object', async () => {
                        const invalidLabel = { label: {} };

                        try {
                            await transformAndValidate(ctor, invalidLabel);
                            fail(
                                `Did not throw a validator error` +
                                    `when using an invalid label prop ${
                                        invalidLabel.label
                                    }`
                            );
                        } catch (e) {
                            expect(e).toBeInstanceOf(Array);
                            expect(errorArrayHas('label', e)).toBeTruthy();
                        }
                    });
                });

                it('Accepts a string label', async () => {
                    const validLabel = { label: 'test' };

                    try {
                        await transformAndValidate(ctor, validLabel);
                    } catch (e) {
                        expect(e).toBeInstanceOf(Array);
                        expect(!errorArrayHas('label', e)).toBeTruthy();
                    }
                });
            });

            describe('Required Prop', () => {
                it('is optional', async () => {
                    try {
                        await transformAndValidate(ctor, {});
                    } catch (e) {
                        expect(e).toBeInstanceOf(Array);
                        expect(!errorArrayHas('required', e)).toBeTruthy();
                    }
                });

                it('accepts a boolean', async () => {
                    try {
                        await transformAndValidate(ctor, { required: true });
                    } catch (e) {
                        expect(e).toBeInstanceOf(Array);
                        expect(!errorArrayHas('required', e)).toBeTruthy();
                    }
                    try {
                        await transformAndValidate(ctor, { required: false });
                    } catch (e) {
                        expect(e).toBeInstanceOf(Array);
                        expect(!errorArrayHas('required', e)).toBeTruthy();
                    }
                });
            });
        });
    });
};
