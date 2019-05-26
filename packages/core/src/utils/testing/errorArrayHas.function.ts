import { ValidationError } from 'class-validator';

/**
 * reduces a ValidationError array checking for a specific type string type match
 * returns false if found, true otherwise.
 * @param type
 * @param e
 */
const errorArrayHas = (
    type: string,
    e: ValidationError[] | ValidationError
): boolean => {
    if (e instanceof Array) {
        return e.reduce((acc: boolean, val: ValidationError) => {
            expect(val).toBeInstanceOf(ValidationError);
            if (val.property === type) {
                return true;
            }
            return acc;
        }, false);
    }
    expect(e).toBeInstanceOf(ValidationError);
    return e.property === type;
};

export default errorArrayHas;
