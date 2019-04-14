import { Factory } from '@/models/Formidable/Field/Core/Factory/field.factory.abstract';
import { FieldType } from '@/models/Formidable/Field/Core/field.types.enum';
import { IFormidableDateProps } from './date.props.interface';
import { DateType } from './date.type.enum';

/**
 * Date's implmentation of the Factory
 */
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
