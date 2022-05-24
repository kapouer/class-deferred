import { jest } from '@jest/globals';
import { Deferred } from 'class-deferred';

test('class toString is Deferred', () => {
	expect((new Deferred()).toString()).toBe('[object Deferred]');
});

test('instanceof Deferred', () => {
	expect(new Deferred()).toBeInstanceOf(Deferred);
});

test('parent instanceof Promise', () => {
	expect(new Deferred()).toBeInstanceOf(Promise);
});


test('deferred then', async () => {
	const d = new Deferred();
	const fun = jest.fn();
	const p = d.then(fun);
	d.resolve("test");
	await p;
	expect(fun).toHaveBeenCalledWith("test");
});

test('deferred catch', async () => {
	const d = new Deferred();
	const fun = jest.fn();
	const p = d.catch(fun);
	d.reject("test");
	await p;
	expect(fun).toHaveBeenCalledWith("test");
});

test('deferred finally', async () => {
	const d = new Deferred();
	const fun = jest.fn();
	const p = d.then(() => { }).finally(fun);
	d.resolve("test");
	await p;
	expect(fun).toHaveBeenCalledWith();
});
