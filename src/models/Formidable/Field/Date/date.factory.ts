import { BasicFieldFactoryObject } from './../field.factory.abstract';
import {
    IFormidableDateProps,
    DateType
} from '@/models/Formidable/Field/Date/FormidableDate';
import { Factory } from '../field.factory.abstract';
import { FieldType } from '../field.abstract';

export class DateFactory extends Factory<IFormidableDateProps> {
    public generate(count = 1, config = {}) {
        return new Array(count).map(x => this.buildField(config));
    }

    public buildField(config = {}): IFormidableDateProps {
        return {
            ...this.buildBaseField(),
            dateType: DateType.Date,
            fieldType: FieldType.Datetime,
            ...config
        } as IFormidableDateProps;
    }
}
