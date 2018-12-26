import { FormidableField, IFormidableFieldProps } from '@/models/Formidable/Field/field.abstract';
import { ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import 'reflect-metadata';
import { NumberRange } from '@/models/Formidable/Field/FormidableNumberRange/NumberRange';

/**
 * A Range is defined as two values: from and to. These can be numbers, dates, times, etc. Hence the generic T
 */
export interface INumberRange {
	from: number | null;
	to: number | null;
}

/**
 * Props interface
 */
export interface IFormidableNumberRangeProps extends IFormidableFieldProps {
	value: INumberRange;
}

export class FormidableNumberRange extends FormidableField<INumberRange> implements IFormidableNumberRangeProps {
	@ValidateNested()
	@Type(() => NumberRange)
	public value!: INumberRange;
}
