import { INumberRange } from '@/models/Formidable/Field/NumberRange/FormidableNumberRange';
import { IsOptional, IsNumber } from 'class-validator';
import { IsGreaterThanOrEqualTo } from '@/models/IsGreaterThanOrEqualTo';
import { IsLessThanOrEqualTo } from '@/models/IsLessThanOrEqualTo';

export class NumberRange implements INumberRange {
    @IsNumber()
    @IsLessThanOrEqualTo('to', {
        message: v => 'from must be less than or equal to "to": ' + v.object.to
    })
    @IsOptional()
    public from!: number | null;

    @IsNumber()
    @IsGreaterThanOrEqualTo('from', {
        message: v =>
            'to property must be greater than or equal to the from property: ' +
            v.object.from
    })
    @IsOptional()
    public to!: number | null;
}
