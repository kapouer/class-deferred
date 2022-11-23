# class Deferred

An incredibly simple es6 deferred implementation.

## api

- constructor: `new Deferred()` is a promise,
- instance: `d.resolve(arg); d.reject(arg);` resolves or rejects the promise.

## usage

```js
import { Deferred } from "class-deferred";

const d = new Deferred();
setTimeout(d.resolve, 100);
await d;
```

This package exports both an ES and a CJS module.

