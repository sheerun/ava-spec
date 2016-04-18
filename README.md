# ![AVA Spec](https://i.imgsafe.org/0314359.png)

[![Build Status](https://travis-ci.org/sheerun/ava-spec.svg?branch=master)](https://travis-ci.org/sheerun/ava-spec)

## Installation

AVA Spec is meant to be installed next to [AVA](https://github.com/sindresorhus/ava), so please follow its installation instructions first.

Then, install `ava-spec` as a development dependency:

```
$ npm install --save-dev ava-spec
```

## Usage

```js
import test from 'ava-spec';

test('ava spec is 100% compatible with ava', t => {
  t.is(true, true);
});

test.describe('ava spec', it => {
  it('can look almost like jasmine', t => {
    t.deepEqual([1, 2], [1, 2]);
  });

  it.skip.todo('supports all chaining modifiers!');
});

test.only.group(test => {
  test('it can be used to group some tests', t => {
    t.not(true, false);
  });
});

test.feature('Cash withdrawal.', scenario => {
  scenario('Not enough money in ATM', t => {
    // Cucumber-like keywords are available
  });
});

var subject = test.describe('You');

subject('do not need to use callacks!', t => {
  t.end();
});
```

## API

AVA SPEC allows you to define test groups with 3 equivalent methods:

### `test.describe([title], implementation)`
### `test.feature([title], implementation)`
### `test.group([title], implementation)`

#### `title`

Type: `string`

Group title.

#### `implementation(ava)`

Type: `function`

Called by ava-spec with scoped AVA instance so:

1. All modifiers applied to group are applied to any test inside it
2. Test titles inside group are prefixed with group title followed by space

## Team

[![Adam Stankiewicz](https://avatars3.githubusercontent.com/u/292365?s=130)](https://sheerun.net) | [![Please help me!](https://s28.postimg.org/hcy7aq9nh/42.png)](https://github.com/sheerun/graphqlviz/pulls)
---|---
[Adam Stankiewicz](https://sheerun.net) | [Become co-author!](https://github.com/sheerun/graphqlviz/pulls)
