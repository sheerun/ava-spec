# ![AVA Spec](https://i.imgsafe.org/0314359.png)

[![Build Status](https://travis-ci.org/sheerun/ava-spec.svg?branch=master)](https://travis-ci.org/sheerun/ava-spec)

## Installation

AVA Spec is meant to be installed next to [AVA](https://github.com/sindresorhus/ava), so please follow its installation instructions first.

Then, install `ava-spec` as a development dependency:

```
$ npm install --save-dev ava-spec
```

## Usage

First of all, you can use `ava-spec` as a drop-in for ava:

```js
import test from 'ava-spec';

test('AVA Spec is 100% compatible with ava', t => {
  t.is(true, true);
});
```

Jasmine-like DSL is supported:

```js
import {describe} from 'ava-spec';

describe('AVA Spec', it => {
  it('can look almost like jasmine', t => {
    t.deepEqual([1, 2], [1, 2]);
  });

  it.todo('supports all chaining modifiers!');
});
```

Or write cucumber-like scenarios:

```js
test.feature('Cash withdrawal.', scenario => {
  scenario('Not enough money in ATM', t => {
    // Cucumber-like keywords are available
  });
});
```

Or just group tests together:

```js
test.serial.skip.group(test => {
  test('AVA Spec can be used to just group some tests', t => {
    t.not(true, false);
  });
});
```

Last but not least you can pass groups around in fun ways:

```js
const subject = test.describe('You');

subject('do not need to use callacks!', t => {
  t.is(2 + 2, 4);
});
```

Result:

```
  - AVA Spec can be used to just group some tests
  ✔ AVA Spec is 100% compatible with ava
  ✔ AVA Spec can look almost like jasmine
  - AVA Spec supports all chaining modifiers!
  ✔ Cash withdrawal. Not enough money in ATM
  ✔ You do not need to use callacks!

  4 tests passed
  1 test skipped
  1 test todo
```

## API

AVA spec allows you to define test groups using 3 equivalent methods:

#### `test.describe([title], implementation)`
#### `test.feature([title], implementation)`
#### `test.group([title], implementation)`

##### `title`

Type: `string`

A group title.

##### `implementation(ava)`

Type: `function`

It is called by AVA Spec with modified AVA instance as so:

1. Group modifiers are applied to all tests inside it
2. Group title is prefixed to all test titles inside it

## Team

[![Adam Stankiewicz](https://avatars3.githubusercontent.com/u/292365?s=130)](https://sheerun.net) | [![Please help me!](http://s28.postimg.org/hcy7aq9nh/42.png)](https://github.com/sheerun/ava-spec/pulls)
---|---
[Adam Stankiewicz](https://sheerun.net) | [Become co-author!](https://github.com/sheerun/ava-spec/pulls)
