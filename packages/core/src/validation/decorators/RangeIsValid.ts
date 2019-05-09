import { registerDecorator, ValidationArguments } from 'class-validator';

import { FormidableLink } from '../../models/field/link/FormidableLink';
import { ILink } from '../../models/field/link/link.interface';

// export function LinkIsValid(property: string, validationOptions?: ValidationOptions) {

// export interface IFormidableLinkValidationOptions {
// 	minLinkHrefLength?: number;
// 	maxLinkHrefLength?: number;
// 	minLinkTextLength?: number;
// 	maxLinkTextLength?: number;
// }

export function RangeIsValid() {
    return (object: FormidableLink, propertyName: string) => {
        registerDecorator({
            target: object.constructor,
            propertyName,
            // options: validationOptions,
            constraints: ['value'],
            name: 'linkIsValid',
            validator: {
                validate(value: ILink, args: ValidationArguments) {
                    if (!value) {
                        return false;
                    } else if (value.href === null && value.text === null) {
                        return true;
                    }

                    if (!value.href) {
                        return false;
                    }

                    if (!value.text) {
                        return false;
                    }

                    if (args.object) {
                        if (
                            ((args.object as FormidableLink).minLinkHrefLength
                                ? value.href.length <
                                  ((args.object as FormidableLink)
                                      .minLinkHrefLength as number)
                                : false) ||
                            ((args.object as FormidableLink).maxLinkHrefLength
                                ? value.href.length >
                                  ((args.object as FormidableLink)
                                      .maxLinkHrefLength as number)
                                : false)
                        ) {
                            return false;
                        }

                        if (
                            ((args.object as FormidableLink).minLinkTextLength
                                ? value.text.length <
                                  ((args.object as FormidableLink)
                                      .minLinkTextLength as number)
                                : false) ||
                            ((args.object as FormidableLink).maxLinkTextLength
                                ? value.text.length >
                                  ((args.object as FormidableLink)
                                      .maxLinkTextLength as number)
                                : false)
                        ) {
                            return false;
                        }
                    }

                    return true;
                }
            }
        });
    };
}
