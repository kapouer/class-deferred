# class Deferred

An incredibly simple es6 deferred implementation.

## api

- constructor: `new Deferred()` returns a subclass of Promise.
- instance: `d.resolve(arg); d.reject(arg);` resolves or rejects the promise.

## usage

```js
import { Deferred } from "class-deferred";
// const { Deferred } = require('class-deferred');

const d = new Deferred();
// d is itself a promise
d.then(() => {
 console.log("done");
});
setTimeout(d.resolve, 100);
```
