import { FormidableField, FieldType } from '@/models/Formidable/Field/field.abstract';

import { FormidableNumber } from '@/models/Formidable/Field/FormidableNumber';
import { transformAndValidate } from 'class-transformer-validator';
import { ValidationError } from 'class-validator';

const runFieldTests = (ctor: new (...args: any[]) => FormidableField) => {
    describe(`Formidable Form Field Core Test for ${ctor.name} Implementation`, () => {

        describe('Field Initialization', () => {

            describe('Field Type Prop', () => {
                it('throws an error when an invalid FieldType is used', async () => {

                    const invalidType = { type: 'someInvalidType'};

                    try {
                        await transformAndValidate(ctor, invalidType);
                        fail(`Did not throw a validator error when using an invalid field type ${invalidType.type}`);
                    } catch (e) {
                        expect(e).toBeInstanceOf(Array);
                        expect(
                            // verify that type threw an error
                            e.reduce((acc: boolean, val: ValidationError) => {
                                expect(val).toBeInstanceOf(ValidationError);
                                if (val.property === 'type') {
                                    expect(val.value).toEqual(invalidType.type);
                                    return true;
                                }
                                return acc;
                            }, false)
                        ).toBeTruthy();
                    }
                });

                it('does not throw an error when a valid Field Type is used', async () => {
                    const validType = { type: FieldType.Number };

                    try {
                        await transformAndValidate(ctor, validType);
                    } catch (e) {
                        expect(e).toBeInstanceOf(Array);
                        expect(
                            // verify that none of the thrown errors were for type
                            e.reduce((acc: boolean, val: ValidationError) => {
                                expect(val).toBeInstanceOf(ValidationError);
                                if (val.property === 'type') {
                                    return true;
                                }
                                return acc;
                            }, false)
                        ).toBeFalsy();
                    }
                });
            });

            describe('Name Prop', () => {
                describe('Errors are thrown when an invalid name prop is used', () => {
                    it('number', async () => {
                        const invalidName = { name: -1 };

                        try {
                            await transformAndValidate(ctor, invalidName);
                            fail(`Did not throw a validator error when using an invalid name prop ${invalidName.name}`);
                        } catch (e) {
                            expect(e).toBeInstanceOf(Array);
                            expect(
                                // verify that type threw an error
                                e.reduce((acc: boolean, val: ValidationError) => {
                                    expect(val).toBeInstanceOf(ValidationError);
                                    if (val.property === 'name') {
                                        expect(val.value).toEqual(invalidName.name);
                                        return true;
                                    }
                                    return acc;
                                }, false)
                            ).toBeTruthy();
                        }
                    });

                    it('boolean', async () => {
                        const invalidName = { name: false };

                        try {
                            await transformAndValidate(ctor, invalidName);
                            fail(`Did not throw a validator error when using an invalid name prop ${invalidName.name}`);
                        } catch (e) {
                            expect(e).toBeInstanceOf(Array);
                            expect(
                                // verify that type threw an error
                                e.reduce((acc: boolean, val: ValidationError) => {
                                    expect(val).toBeInstanceOf(ValidationError);
                                    if (val.property === 'name') {
                                        expect(val.value).toEqual(invalidName.name);
                                        return true;
                                    }
                                    return acc;
                                }, false)
                            ).toBeTruthy();
                        }
                    });

                    it('object', async () => {
                        const invalidName = { name: {} };

                        try {
                            await transformAndValidate(ctor, invalidName);
                            fail(`Did not throw a validator error when using an invalid name prop ${invalidName.name}`);
                        } catch (e) {
                            expect(e).toBeInstanceOf(Array);
                            expect(
                                // verify that type threw an error
                                e.reduce((acc: boolean, val: ValidationError) => {
                                    expect(val).toBeInstanceOf(ValidationError);
                                    if (val.property === 'name') {
                                        expect(val.value).toEqual(invalidName.name);
                                        return true;
                                    }
                                    return acc;
                                }, false)
                            ).toBeTruthy();
                        }
                    });
                });

                it('Accepts a string name', async () => {
                    const validName = { name: 'test' };

                    try {
                        await transformAndValidate(ctor, validName);
                    } catch (e) {
                        expect(e).toBeInstanceOf(Array);
                        expect(
                            // verify that none of the thrown errors were for type
                            e.reduce((acc: boolean, val: ValidationError) => {
                                expect(val).toBeInstanceOf(ValidationError);
                                if (val.property === 'name') {
                                    return true;
                                }
                                return acc;
                            }, false)
                        ).toBeFalsy();
                    }
                });
            });
        });
    });
};

runFieldTests(FormidableNumber);
