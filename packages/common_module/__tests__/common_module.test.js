'use strict';

const commonModule = require('..');
const assert = require('assert').strict;

assert.strictEqual(commonModule(), 'Hello from commonModule');
console.info("commonModule tests passed");
