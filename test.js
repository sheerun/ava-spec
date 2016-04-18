'use strict';
var test = require('tap').test;
var proxyquire = require('proxyquire');

function mock(ava) {
  if (!ava) {
    ava = {};
  }
  ava['@noCallThru'] = true;
  return proxyquire('./', {ava: ava});
}

function id(title) {
  return title;
}

test('forwards call to ava', function (t) {
  var test = mock(id);

  t.same(test('name'), 'name');
  t.end();
});

test('supports simple methods', function (t) {
  var test = mock({
    todo: id
  });

  t.same(test.todo('name'), 'name');
  t.end();
});

test('supports chained methods', function (t) {
  var test = mock({
    afterEach: {
      cb: id
    }
  });

  t.same(test.afterEach.cb('name'), 'name');
  t.end();
});

test('describe appends a description to tests', function (t) {
  var test = mock(id);

  var subject = test.describe('Subject');

  t.same(subject('something'), 'Subject something');

  t.end();
});

test('applies modifiers to all tests inside describe', function (t) {
  t.plan(2);

  var test = mock({
    only: {
      skip: id,
      todo: id
    }
  });

  test.only.describe('Something', function (test) {
    t.same(test.skip('is awesome'), 'Something is awesome');
    t.same(test.todo('is awesome'), 'Something is awesome');
    t.end();
  });
});

test('allows for promise-like groups', function (t) {
  var test = mock({only: id});
  var group = test.only.group();

  t.same(group('something'), 'something');
  t.end();
});
