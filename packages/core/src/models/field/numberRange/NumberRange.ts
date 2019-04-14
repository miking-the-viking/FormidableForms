import { INumberRange } from '@/models/field/numberRange/numberRange.interface';
import { IsGreaterThanOrEqualTo } from '@/models/validation/decorators/IsGreaterThanOrEqualTo';
import { IsLessThanOrEqualTo } from '@/models/validation/decorators/IsLessThanOrEqualTo';
import { IsNumber, IsOptional } from 'class-validator';

/**
 * Number Range validation class
 */
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
