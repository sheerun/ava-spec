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
```

## Team

[![Adam Stankiewicz](https://avatars3.githubusercontent.com/u/292365?s=130)](https://sheerun.net) | [![You](https://s28.postimg.org/hcy7aq9nh/42.png)](https://github.com/sheerun/graphqlviz/pulls)
---|---
[Adam Stankiewicz](https://sheerun.net) | [You](https://github.com/sheerun/graphqlviz/pulls)
