/**
 * A Range is defined as two values: from and to. These can be numbers, dates, times, etc. Hence the generic T
 */
export interface INumberRange {
    from: number | null;
    to: number | null;
}
