import { fromEvent, of, from } from 'rxjs';
import {
    debounceTime,
    distinctUntilChanged,
    map,
    switchMap,
    tap
} from 'rxjs/operators';

import { TypeaheadClient, IData } from '.';

import faker from 'faker';

const CREATE_SAMPLE_DATA = () => {
    return {
        name: `${faker.name.firstName()} ${faker.name.lastName()}`
    };
};

const SAMPLE_DATA_SET_SIZE = 10000;
const SAMPLE_DATA_SET: IData[] = Array.from(
    { length: SAMPLE_DATA_SET_SIZE },
    CREATE_SAMPLE_DATA
);

const getMatching = (query: string) =>
    SAMPLE_DATA_SET.filter(record => record.name.match(query));

const promisedGetMatching = async (...args: any[]) => getMatching(args as any);

const DEBOUNCE_RATE = 500;

(async () => {
    const client = new TypeaheadClient(promisedGetMatching, DEBOUNCE_RATE);
    client.filter('Jimmy');
    client.filter('Abel');
    client.filter('Vicky');
    client.filter('Barbara');
    client.filter('Tom');

    setTimeout(() => {
        client.filter('Tom');
    }, DEBOUNCE_RATE * 2);

    setTimeout(() => {
        client.filter('Tom');
    }, DEBOUNCE_RATE * 4);

    setTimeout(() => {
        client.filter('Tom');
    }, DEBOUNCE_RATE * 6);

    setTimeout(() => {
        client.filter('Bar');
    }, DEBOUNCE_RATE * 8);

    const dataSubjectObserver = from(client.dataSubject)
        .pipe(
            tap(val =>
                console.log('TAPPED Observable Data Subject from outside ', val)
            )
        )
        .subscribe();
})();
