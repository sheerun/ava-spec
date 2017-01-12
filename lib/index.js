var test = require('ava');
var optionChain = require('option-chain');
var fnName = require('fn-name');

var chainableMethods = {
  chainableMethods: {
    test: {},
    serial: {serial: true},
    before: {before: true},
    after: {after: true},
    skip: {skip: true},
    todo: {todo: true},
    only: {only: true},
    failing: {only: true},
    beforeEach: {beforeEach: true},
    afterEach: {afterEach: true},
    cb: {cb: true},
    // Extras
    describe: {$group: 'describe'},
    feature: {$group: 'feature'},
    group: {$group: 'group'}
  }
};

function nextTarget(target, methods) {
  Object.keys(methods).forEach(function (method) {
    if (target.hasOwnProperty(method)) {
      target = target[method];
    }
  });

  return target;
}

function getTitle(args) {
  if (args.length === 0) {
    return null;
  }
  if (typeof args[0] === 'function') {
    return fnName(args[0]);
  }
  if (typeof args[0] === 'string') {
    return args[0];
  }
}

function getFn(args) {
  if (typeof args[1] === 'function') {
    return args[1];
  }
  if (typeof args[0] === 'function') {
    return args[0];
  }
}

function nextPrefix(prefix, title) {
  if (title) {
    return (prefix || []).concat(title);
  }

  return prefix;
}

function scopedChain(parent) {
  var chain = optionChain(chainableMethods, function (opts, args) {
    var target = nextTarget(parent.target, opts);
    var title = getTitle(args);
    var fn = getFn(args);
    var prefix = nextPrefix(parent.prefix, title);

    if (opts.$group) {
      var nextChain = scopedChain({
        target: target,
        prefix: prefix
      });

      if (typeof args[1] === 'function') {
        args[1](nextChain);
      } else if (typeof args[0] === 'function') {
        args[0](nextChain);
      }

      return nextChain;
    }

    title = prefix ? prefix.join(' ') : null;
    var targetArgs = title ? [title] : [];
    targetArgs = fn ? targetArgs.concat(fn) : targetArgs;
    return target.apply(target, targetArgs);
  });

  return chain.test;
}

var spec = scopedChain({
  target: test,
  title: null
});

module.exports.default = module.exports = spec;
