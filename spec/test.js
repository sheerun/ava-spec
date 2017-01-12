'use strict';
var test = require('../');

test.beforeEach(function (t) {
  t.context.test = 'test';
});

test(function (t) {
  t.is(true, true);
});

test('is compatible with ava', function (t) {
  t.is(true, true);
});

test('is compatible with ava context', function (t) {
  t.true(t.context.test === 'test');
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

  test('can skip multiple tests', function () {
    throw new Error('hello world');
  });
});
