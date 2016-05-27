'use strict';
var test = require('../');

test('is compatible with ava', function (t) {
  t.is(true, true);
});

test.describe('describe', function (test) {
  test('can be used to nest tests', function (t) {
    t.is(true, true);
  });
});

test.skip.describe('describe', function (test) {
  test('can skip multiple tests', function (t) {
    t.is(true, false);
  });

  test('can skip multiple tests', function (t) {
    throw new Error('hello world');
  });
});
