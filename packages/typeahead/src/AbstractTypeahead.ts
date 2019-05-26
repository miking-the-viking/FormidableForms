import { Observable, Subject, from, BehaviorSubject } from 'rxjs';
import {
    tap,
    switchMap,
    map,
    debounceTime,
    distinctUntilChanged
} from 'rxjs/operators';

const FALLBACK_DEBOUNCE_RATE = 500;

/**
 * Typeahead class implementation based off of the LearnRxJS Example Recipe
 *
 * The basic principle of Typeahead is that suggestions are provided from existing data that are filtered by existing input
 *
 * Implementations of a Typeahead class must implement
 *
 *  - a filter function (`promise` or `Observable`)
 *  - a `debounce` rate for the filter function, defaulting to `500ms`
 *  - a datset bindinf for the filtered results
 */
export abstract class AbstractTypeahead<T> {
    get data() {
        return this.protectedData;
    }

    set data(newData: T[]) {
        return;
    }

    get queryString() {
        return this.query;
    }

    set queryString(newQuery: string) {
        this.query = newQuery;
        this.querySubject.next(this.query);
    }

    /**
     * Exposed Observable for the debounced retrieval of results
     * allowing for Observer-based client reactions
     */
    public getDataObservable!: Observable<T[]>;
    public dataSubject!: Subject<T[]>;
    protected protectedData: T[] = [];
    protected query: string = '';
    protected querySubject!: Subject<string>;

    constructor(
        protected readonly getDataFunc: (...params: any[]) => Promise<T[]>,
        protected readonly debounceRate: number = 500
    ) {
        if (!this.validateGetDataFunc(getDataFunc)) {
            throw new Error(
                'Missing valid data retrieval function for Typeahead'
            );
        }

        if (debounceRate == undefined) {
            this.debounceRate = FALLBACK_DEBOUNCE_RATE;
        } else if (
            isNaN(debounceRate) ||
            debounceRate < 0 ||
            parseInt(debounceRate as any) < 0
        ) {
            throw new Error(`Invalid debounceRate ${debounceRate}`);
        }

        this.querySubject = new BehaviorSubject('');
        this.dataSubject = new BehaviorSubject(new Array());
        this.initializeGetDataObservable();
    }

    /**
     * Called when the dataset is to be filtered,
     * `public` so that it is triggerable programmatically
     * @param query
     */
    public async filter(query: any) {
        this.queryString = query;
        return this.data;
    }

    private validateGetDataFunc(getDataFunc: any): boolean {
        if (getDataFunc == null) {
            return false;
        }

        // Validate that getDataFunc is a Function
        if (
            getDataFunc instanceof Function ||
            typeof getDataFunc === 'function'
        ) {
            return true;
        }

        return false;
    }

    private initializeGetDataObservable() {
        this.getDataObservable = from(this.querySubject).pipe(
            debounceTime(this.debounceRate),
            distinctUntilChanged(),
            switchMap((val, index) => this.getDataFunc(val)),
            tap((dataSet: T[]) => {
                this.dataSubject.next(dataSet);
                this.protectedData = dataSet;
            })
        );
        this.getDataObservable.subscribe();
    }
}
