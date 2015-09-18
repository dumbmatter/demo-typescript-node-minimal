// minimal node.js demo

// link the typing, it will export defintions for an 'xregexp' module

/// <reference path="./typings/xregexp/xregexp.d.ts" />
/// <reference path="./typings/pubsubjs/pubsub.d.ts" />

// import the npm module (using package name)
import xregexp = require('xregexp');
import PubSub = require('pubsub-js');

// import our own TypeScript file (using relative path, no extension)
import greeter = require('./lib/greeter');

// use the module like in vanilla JS
var exp = xregexp.XRegExp(/abc/);
var match = exp.exec('abcdefgh');
console.log(match);

console.log(greeter.hello('Dave'));
