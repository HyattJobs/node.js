//Node.js里面的许多对象都会分发事件:一个net.Server对象会在每次有新链接时分发一个事件,
//一个fs.readStream对象会在文件被打开的时候发出一个事件,所有这些产生时间么的对象都是events.EventEmitter的实例

//events模块只提供了一个对象:events.EventEmitter;EventEmitter的核心就是事件触发与事件监听器功能的封装
var EventEmitter = require('events').EventEmitter;
var event = new EventEmitter();

event.on('some_event', function(){
	console.log('some_event 事件触发');
});
setTimeout(function(){
	event.emit('some_event');
},1000);

//2
var events = require('events');
var emitter = new events.EventEmitter();

emitter.on('someEvent',function(arg1,arg2){
	console.log('listerer1',arg1,arg2);
});

emitter.on('someEvent',function(arg1,arg2){
	console.log('listener2',arg1,arg2);
})

emitter.emit('someEvent','arg1参数','arg2参数');