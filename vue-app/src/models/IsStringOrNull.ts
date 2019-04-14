import { registerDecorator, ValidationOptions, ValidationArguments } from 'class-validator';

export function IsStringOrNull() {
    // tslint:disable-next-line:only-arrow-functions
    return (object: object, propertyName: string) => {
        registerDecorator({
            target: object.constructor,
            propertyName,
            // options: validationOptions,
            // constraints: [property],
            name: 'isStringOrNull',
            validator: {
                validate(value: any, args: ValidationArguments) {
                    return (value === null || typeof value === 'string');
                }
            }
        });
    };
}
