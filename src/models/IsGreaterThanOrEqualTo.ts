import { registerDecorator, ValidationOptions, ValidationArguments } from 'class-validator';

export function IsGreaterThanOrEqualTo(property: string, validationOptions?: ValidationOptions) {
    return (object: object, propertyName: string) => {
        registerDecorator({
            target: object.constructor,
            propertyName,
            options: validationOptions,
            constraints: [property],
            name: 'isGreaterThanOrEqualTo',
            validator: {
                validate(value: any, args: ValidationArguments) {
                    const [relatedPropertyName] = args.constraints;
                    const relatedValue = (args.object as any)[relatedPropertyName];
                    if (relatedValue === undefined || relatedValue === null) {
                        return true;
                    }

                    return (typeof value === 'number' &&
                        typeof relatedValue === 'number') ?
                        value >= relatedValue : true;
                }
            }
        });
    };
}
