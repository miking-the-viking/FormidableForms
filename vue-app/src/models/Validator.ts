import { ValidationError, validate } from 'class-validator';
import { plainToClass } from 'class-transformer';

export class Validator {
    public validationErrors!: ValidationError[];

    constructor(
        private readonly validationCtor: new (...args: any[]) => object,
        public formData: {}
    ) {
        this.validationErrors = [];
    }

    public async validate(): Promise<boolean> {
        const obj = plainToClass(this.validationCtor, this.formData);
        this.validationErrors = await validate(obj);

        if (this.validationErrors.length === 0) {
            return true;
        }
        return false;
    }

    public errorArrayHas(type: string): boolean {
        return this.validationErrors.reduce(
            (acc: boolean, val: ValidationError) => {
                if (val.property === type) {
                    return true;
                }
                return acc;
            },
            false
        );
    }
}
