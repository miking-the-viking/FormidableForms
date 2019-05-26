import { AbstractTypeahead } from './AbstractTypeahead';

export interface IData {
    name: string;
}

export class TypeaheadClient extends AbstractTypeahead<IData> {
    constructor(
        getDataFunc: (...params: any) => Promise<IData[]>,
        debounceRate = 500
    ) {
        super(getDataFunc, debounceRate);
    }
}
