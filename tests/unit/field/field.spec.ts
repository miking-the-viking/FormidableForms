import { FormidableField, FieldType } from '@/models/Formidable/Field/field.abstract';

import { FormidableNumber } from '@/models/Formidable/Field/FormidableNumber';
import { transformAndValidate } from 'class-transformer-validator';
import { ValidationError } from 'class-validator';

/**
 * reduces a ValidationError array checking for a specific type string type match
 * returns false if found, true otherwise.
 * @param type
 * @param e
 */
export function errorArrayHas(type: string, e: ValidationError[]): boolean {
    return e.reduce((acc: boolean, val: ValidationError) => {
        expect(val).toBeInstanceOf(ValidationError);
        if (val.property === type) {
            return true;
        }
        return acc;
    }, false);
}

const runFieldTests = (ctor: new (...args: any[]) => FormidableField<any>) => {
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
                        expect(errorArrayHas('type', e)).toBeTruthy();
                    }
                });

                it('does not throw an error when a valid Field Type is used', async () => {
                    const validType = { type: FieldType.Number };

                    try {
                        await transformAndValidate(ctor, validType);
                    } catch (e) {
                        expect(e).toBeInstanceOf(Array);
                        expect(!errorArrayHas('type', e)).toBeTruthy();
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
                            expect(errorArrayHas('name', e)).toBeTruthy();
                        }
                    });

                    it('boolean', async () => {
                        const invalidName = { name: false };

                        try {
                            await transformAndValidate(ctor, invalidName);
                            fail(`Did not throw a validator error when using an invalid name prop ${invalidName.name}`);
                        } catch (e) {
                            expect(e).toBeInstanceOf(Array);
                            expect(errorArrayHas('name', e)).toBeTruthy();
                        }
                    });

                    it('object', async () => {
                        const invalidName = { name: {} };

                        try {
                            await transformAndValidate(ctor, invalidName);
                            fail(`Did not throw a validator error when using an invalid name prop ${invalidName.name}`);
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
        });
    });
};

runFieldTests(FormidableNumber);
