/**
 * Link implementation of a Formidable Field test suite
 */
import { transformAndValidate } from 'class-transformer-validator';
import { FieldType } from '@/models/Formidable/Field/field.abstract';
import runFieldTests, { errorArrayHas } from './field.abstract';
import { FormidableLink, IFormidableLinkProps, ILink } from '@/models/Formidable/Field/FormidableLink';
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';

describe('Formidable Link field', () => {

	describe('Core Field Tests', () => {
		runFieldTests(FormidableLink);
	});

	describe('Initialization & Validation', () => {

		describe('Props', () => {

			// describe('type', () => {
			// 	it('Only allows the Link FieldType', async () => {
			// 		for (const type in FieldType) {
			// 			if (type !== FieldType.Link) {
			// 				try {
			// 					await transformAndValidate(FormidableLink, { type: FieldType[type] });
			// 				} catch (e) {
			// 					expect(errorArrayHas('type', e)).toBeTruthy();
			// 				}
			// 			}
			// 		}
			// 	});
			// });

			describe('value', () => {

				it('Can initialize a FormidableLink with valid basic props and a null value', async () => {
					const validLink: IFormidableLinkProps = {
						type: FieldType.Link,
						value: {
							href: null,
							text: null
						}
					};
					await transformAndValidate(FormidableLink, validLink);
				});

				it('Can initialize a FormidableLink with valid basic props and string values for href and text', async () => {
					const validLink: IFormidableLinkProps = {
						type: FieldType.Link,
						value: {
							href: 'somewebsite.com',
							text: 'Some Website'
						}
					};
					await transformAndValidate(FormidableLink, validLink);

					const link = plainToClass(FormidableLink, validLink);
					const errs = await validate(link);
					expect(errs).toBeInstanceOf(Array);
					if (errs.length > 0) {
						throw errs;
					}

				});

				it('Fails to validate a FormidableLink with a non-url href', async () => {
					const validLink: IFormidableLinkProps = {
						type: FieldType.Link,
						value: {
							href: '~`=---2?//\\/"\'',
							text: 'Some Website'
						}
					};
					try {
						await transformAndValidate(FormidableLink, validLink);
						fail('should\'ve failed with an invalid url href');
					} catch (e) {
						expect(errorArrayHas('value', e)).toBeTruthy();
					}

				});

				it('Fails when an object is used', async () => {
					const invalidLink: IFormidableLinkProps = {
						type: FieldType.Link,
						value: {
							href: {},
							text: {}
						 } as ILink
					};
					try {
						await transformAndValidate(FormidableLink, invalidLink);
					} catch (e) {
						expect(e).toBeInstanceOf(Array);
						expect(errorArrayHas('value', e)).toBeTruthy();
					}
				});

			});

			describe('minimum and maximum', () => {

				describe('href', () => {
					it('is not required', async () => {
						await transformAndValidate(FormidableLink,
							{ type: FieldType.Link, value: { href: 'test.com', text: 'somText' } }
						);
					});

					it('accepts numeric values', async () => {
						await transformAndValidate(
							FormidableLink,
							{
								type: FieldType.Link,
								value: { href: 'test.com', text: 'somText' },
								minLinkHrefLength: 1,
								maxLinkHrefLength: 1000
							}
						);
					});

					it('fails on non-numeric values', async () => {
						const invalidParameters = [
							{
								minLinkHrefLength: 'some string',
								maxLinkHrefLength: { a: 'object' }
							},
							{
								minLinkHrefLength: false,
								maxLinkHrefLength: true
							},
							{
								minLinkHrefLength: () => 'function',
								maxLinkHrefLength: new Date()
							}
						];

						Promise.all(invalidParameters.map(async (invalid) => {
							try {
								await transformAndValidate(
									FormidableLink,
									{ type: FieldType.Link, value: { href: 'test.com', text: 'somText' }, ...invalid }
								);
								fail(`Should have failed with the non numeric values`);
							} catch (e) {
								expect(errorArrayHas('minLinkHrefLength', e)).toBeTruthy();
								expect(errorArrayHas('maxLinkHrefLength', e)).toBeTruthy();
							}
						}));
					});

					it('fails when the value is less than the minimum', async () => {
						try {
							await transformAndValidate(FormidableLink,
								{
									type: FieldType.Link,
									value: 'a',
									minLinkHrefLength: 2
								}
							);
							fail(`should have failed with a value less than the minimum`);
						} catch (e) {
							expect(errorArrayHas('value', e)).toBeTruthy();
						}
					});

					it('fails when the href length is greater than the maximum length', async () => {
						const linkObj = {
							type: FieldType.Link,
							value: { href: 'test.com', text: 'somText' },
							maxLinkHrefLength: 5
						};

						try {
							const res = await transformAndValidate(FormidableLink, linkObj);
							const link = plainToClass(FormidableLink, linkObj);
							const errs = await validate(link);
							expect(errs).toBeInstanceOf(Array);
							if (errs.length > 0) {
								throw errs;
							}
							fail(`should have failed with a href length greater than maximum allowed`);
						} catch (e) {
							expect(errorArrayHas('value', e)).toBeTruthy();
						}
					});

				});

				describe('text', () => {
					it('is not required', async () => {
						await transformAndValidate(FormidableLink,
							{
								type: FieldType.Link,
								value: { href: 'test.com', text: 'somText' }
							}
						);
					});

					it('accepts numeric values', async () => {
						await transformAndValidate(
							FormidableLink,
							{
								type: FieldType.Link,
								value: { href: 'test.com', text: 'somText' },
								minLinkTextLength: 1,
								maxLinkTextLength: 1000
							}
						);
					});


					it('fails on non-numeric values', async () => {
						const invalidParameters = [
							{
								minLinkTextLength: 'some string',
								maxLinkTextLength: { a: 'object' }
							},
							{
								minLinkTextLength: false,
								maxLinkTextLength: true
							},
							{
								minLinkTextLength: () => 'function',
								maxLinkTextLength: new Date()
							}
						];

						Promise.all(invalidParameters.map(async (invalid) => {
							try {
								await transformAndValidate(
									FormidableLink,
									{ type: FieldType.Link, value: { href: 'test.com', text: 'somText' }, ...invalid }
								);
								fail(`Should have failed with the non numeric values`);
							} catch (e) {
								expect(errorArrayHas('minLinkTextLength', e)).toBeTruthy();
								expect(errorArrayHas('maxLinkTextLength', e)).toBeTruthy();
							}
						}));
					});

					it('fails when the value is greater than the maximum', async () => {
						try {
							await transformAndValidate(FormidableLink,
								{
									type: FieldType.Link,
									value: { href: 'test.com', text: 'somTextsblahblah' },
									maxLinkTextLength: 5
								}
							);
							fail(`should have failed with a value greater than the maximum`);
						} catch (e) {
							expect(errorArrayHas('value', e)).toBeTruthy();
						}
					});


					it('fails when minimum text length is greater than maximum text length', async () => {
						try {
							await transformAndValidate(FormidableLink, {
								type: FieldType.Link,
								value: { link: 'something.com', text: 'something' },
								minLinkTextLength: 18,
								maxLinkTextLength: 17
							});
							fail(`should have failed when the maximum was less than the minimum`);
						} catch (e) {
							expect(e).toBeInstanceOf(Array);
							expect(errorArrayHas('minLinkTextLength', e)).toBeTruthy();
							expect(errorArrayHas('maxLinkTextLength', e)).toBeTruthy();
						}
					});

					it('fails when minimum href length is greater than maximum href length', async () => {
						try {
							await transformAndValidate(FormidableLink, {
								type: FieldType.Link,
								value: { link: 'something.com', text: 'something' },
								minLinkHrefLength: 18,
								maxLinkHrefLength: 17
							});
							fail(`should have failed when the maximum was less than the minimum`);
						} catch (e) {
							expect(e).toBeInstanceOf(Array);
							expect(errorArrayHas('minLinkHrefLength', e)).toBeTruthy();
							expect(errorArrayHas('maxLinkHrefLength', e)).toBeTruthy();
						}
					});
				});


			});

		});
	});

});
