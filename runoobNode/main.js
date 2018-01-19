
//阻塞程序 
// var fs = require("fs");

// var data = fs.readFileSync("input.txt");

// console.log(data.toString());
// console.log("程序执行结束");

//非阻塞程序

var fs = require("fs")
fs.readFile('input.txt',function(err,data){
	if(err)
		return console.error(err);
	console.log(data.toString());
})
console.log("程序执行结束");

var fs = require("fs");
fs.readFile('input.txt',function(err,data){
	if (err) {
		console.log(err.stack);
		return;
	}
	console.log(data.toString());
});
console.log("程序执行完毕");