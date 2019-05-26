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

const INVALID_GET_DATA_FUNC_SCENARIOS = [
    {
        it: 'undefined',
        val: undefined
    },
    {
        it: 'null',
        val: null
    }
];

const INVALID_DEBOUNCE_RATE_SCENARIOS = [
    {
        it: 'negative value',
        val: -20
    },
    {
        it: 'string',
        val: 'some stirng'
    }
];

const runInvalidDataFuncScenarios = () => {
    INVALID_GET_DATA_FUNC_SCENARIOS.map(scenario => {
        it(
            'Throws an error for an invalid get data function: ' + scenario.it,
            () => {
                try {
                    new TypeaheadClient(scenario.val as any);
                    fail(
                        'Should have thrown an error with invalid input parameter'
                    );
                } catch (e) {
                    expect(e.message).toEqual(
                        'Missing valid data retrieval function for Typeahead'
                    );
                }
            }
        );
    });
};

const runInvalidDebounceScenarios = (func: () => Promise<any>) => {
    INVALID_DEBOUNCE_RATE_SCENARIOS.map(scenario => {
        it(
            'Throws an error for an invalid debounce rate value: ' +
                scenario.it,
            () => {
                try {
                    new TypeaheadClient(func as any, scenario.val as any);
                    fail(
                        'Should have thrown an error with invalid input parameter'
                    );
                } catch (e) {
                    expect(e.message).toEqual(
                        `Invalid debounceRate ${scenario.val}`
                    );
                }
            }
        );
    });
};

describe('Typeahead RxJS', () => {
    let typeaheadClient: TypeaheadClient;

    it('Does somerthing', () => {
        expect(true).toBeTruthy();
    });

    describe('Initialization', () => {
        describe('Requires a "getDataFunc" method that can be used to retrieve data', () => {
            it('Initializes successfully with a valid function that returns a Promise', () => {
                typeaheadClient = new TypeaheadClient(promisedGetMatching);
                expect(typeaheadClient).toBeInstanceOf(TypeaheadClient);
            });

            runInvalidDataFuncScenarios();
        });

        describe('Custom debounce rate', () => {
            describe('Validates as a number greater than 0', () => {
                typeaheadClient = new TypeaheadClient(
                    promisedGetMatching,
                    1000
                );
                expect(typeaheadClient).toBeInstanceOf(TypeaheadClient);
            });

            describe('Validates when null or undefined are passed, falling back to the default value', () => {
                typeaheadClient = new TypeaheadClient(
                    promisedGetMatching,
                    undefined
                );
                expect(typeaheadClient).toBeInstanceOf(TypeaheadClient);
                typeaheadClient = new TypeaheadClient(
                    promisedGetMatching,
                    null as any
                );
                expect(typeaheadClient).toBeInstanceOf(TypeaheadClient);
            });
            describe('Invalid values', () => {
                runInvalidDebounceScenarios(promisedGetMatching);
            });
        });
    });

    describe('Throttling', () => {
        it('Only calls the getData function once per throttle cycle', async () => {
            const mockedSearch = jest.fn(async () => {
                // console.log('called mockedSearch');
                return [];
            });
            const throttleRate = 1000;

            const customTypeahead = new TypeaheadClient(
                mockedSearch,
                throttleRate
            );

            // Make a bunch of requests, then validate that the `mockedSearch` was only called once
            customTypeahead.filter('some');
            customTypeahead.filter('different');
            customTypeahead.filter('search');
            customTypeahead.filter('parameters');
            customTypeahead.filter('in');
            customTypeahead.filter('a');
            customTypeahead.filter('short');
            customTypeahead.filter('timespan');

            expect(mockedSearch).not.toHaveBeenCalled();
            await new Promise((resolve, reject) => {
                setTimeout(() => {
                    expect(mockedSearch).toBeCalledTimes(1);
                    expect(mockedSearch).toHaveBeenLastCalledWith('timespan');

                    customTypeahead.filter('some');
                    customTypeahead.filter('different');
                    customTypeahead.filter('search');
                    customTypeahead.filter('parameters');
                    customTypeahead.filter('in');
                    customTypeahead.filter('a');
                    customTypeahead.filter('short');
                    customTypeahead.filter('timespan again');
                    resolve();
                }, throttleRate);
            });

            await new Promise((resolve, reject) => {
                setTimeout(async () => {
                    expect(mockedSearch).toBeCalledTimes(2);
                    expect(mockedSearch).toHaveBeenLastCalledWith(
                        'timespan again'
                    );
                    resolve();
                }, throttleRate + 200);
            });
        });
    });

    describe('Data Retrieval', () => {
        it('Is retrievable from the Client as a data property', async () => {
            expect(typeaheadClient.data).toBeInstanceOf(Array);

            const mockedSearch = async () => [
                {
                    name: 'proper result'
                },
                {
                    name: 'boo yah'
                }
            ];
            const throttleRate = 1000;

            const customTypeahead = new TypeaheadClient(
                mockedSearch,
                throttleRate
            );

            customTypeahead.filter('asdfasdf');

            await new Promise((resolve, reject) => {
                setTimeout(() => {
                    expect(customTypeahead.data).toHaveLength(2);
                    expect(customTypeahead.data[0].name).toEqual(
                        'proper result'
                    );
                    resolve();
                }, 1100);
            });
        });

        it('Is retievable as an Observable Subject from the dataSubject', async () => {
            let currentFilterValue = '';
            const expectedFilters = ['', 'Jimmy', 'Anne'];
            const dataSubjectSubscription = typeaheadClient.dataSubject.subscribe(
                val => {
                    // console.log(
                    //     `Data Subject subscription retrieved ${
                    //         val.length
                    //     } results from the ${SAMPLE_DATA_SET_SIZE}-size data set`
                    // );

                    if (currentFilterValue === expectedFilters[0]) {
                        expect(val).toHaveLength(SAMPLE_DATA_SET_SIZE);
                    } else {
                        expect(val.length).toBeGreaterThan(0);
                        val.map(result => {
                            expect(
                                result.name.indexOf(currentFilterValue)
                            ).toBeGreaterThanOrEqual(0);
                        });
                    }
                }
            );

            await new Promise((resolve, reject) => {
                setTimeout(async () => {
                    currentFilterValue = expectedFilters[1];
                    typeaheadClient.filter(currentFilterValue);
                    resolve();
                }, 1000);
            });

            await new Promise((resolve, reject) => {
                setTimeout(async () => {
                    currentFilterValue = expectedFilters[2];
                    typeaheadClient.filter(currentFilterValue);
                    resolve();
                }, 2000);
            });

            // await new Promise((resolve, reject) => {
            //     setTimeout(async () => {
            //         typeaheadClient.filter('Mike');
            //         console.log('Searched for Mike');
            //         resolve();
            //     }, 4000);
            // });
        });
    });
});
