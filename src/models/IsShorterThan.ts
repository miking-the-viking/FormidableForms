import { registerDecorator, ValidationOptions, ValidationArguments } from 'class-validator';

export function IsShorterThan(property: string, validationOptions?: ValidationOptions) {
	// tslint:disable-next-line:only-arrow-functions
	return (object: object, propertyName: string) => {
		registerDecorator({
			target: object.constructor,
			propertyName,
			options: validationOptions,
			constraints: [property],
			name: 'isShorterThan',
			validator: {
				validate(value: any, args: ValidationArguments) {
					const [relatedPropertyName] = args.constraints;
					const relatedValue = (args.object as any)[relatedPropertyName];
					if (relatedValue === undefined || relatedValue === null) {
						return true;
					}

					return typeof value === 'string' &&
						typeof relatedValue === 'number' ?
						value.length < relatedValue : true;
				}
			}
		});
	};
}
