'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

class Deferred extends Promise {
	constructor() {
		let pass, fail;
		super((p, f) => {
			pass = p;
			fail = f;
		});
		this.resolve = pass;
		this.reject = fail;
	}
	static get [Symbol.species]() {
		return Promise;
	}
	get [Symbol.toStringTag]() {
		return 'Deferred';
	}
}

exports.Deferred = Deferred;
