import { VALIDATOR_REGISTER } from './constants';
import 'reflect-metadata';

/**
 * Registers the given class as a validatable class, adds a readonly string attribute `registered` with the value of the registered symbol
 * @param constructor
 */
export function registerValidatable<T extends new (...args: any[]) => {}>(
    constructor: T
) {
    const alteredClass = class extends constructor {
        public registered = VALIDATOR_REGISTER;
    };

    addValidatableToReflection(alteredClass);

    return alteredClass;
}

function addValidatableToReflection<T extends new (...args: any[]) => {}>(
    constructor: T
) {
    const existing = Reflect.hasMetadata(VALIDATOR_REGISTER, Reflect);
    console.log(`existing: ${existing}`);
    Reflect.defineMetadata(VALIDATOR_REGISTER, constructor, Reflect);
    console.log('Defined');
    const existing2 = Reflect.hasMetadata(VALIDATOR_REGISTER, Reflect);
    console.log(
        `existing: ${existing2}`,
        Reflect.getMetadata(VALIDATOR_REGISTER, Reflect)
    );
}
