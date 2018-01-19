var events = require('events');
var eventEmitter = new events.EventEmitter();

//监听器 #1
var listener1 = function (){
	console.log('监听器 listener1 执行');
}

//监听器 #2
var listener2 = function(){
	console.log('监听器2 listener2 执行');
}

//绑定connection事件,处理函数为listener1
eventEmitter.addListener('connection',listener1);

//绑定connection 事件,处理函数为listener2
eventEmitter.on('connection',listener2);

var eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners+'个监听器监听连接事件');

eventEmitter.emit('connection');

//移除监听绑定的listener1函数
eventEmitter.removeListener('connection',listener1);
console.log('listener1不在受监听');

eventEmitter.emit('connection');

eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners+'个监听器连接事件.');

console.log('程序执行完毕');

var events = require('events');
var emitter = new events.EventEmitter();

var listener1 = function(){
	console.log('listener1');
}

emitter.addListener('connection',listener1);
emitter.emit('connection');
var count = require('events').EventEmitter.listenerCount(emitter,'connection')
console.log(count);

emitter.removeListener('connection',listener1);

var counts = require('events').EventEmitter.listenerCount(emitter,'connection');
console.log(counts);