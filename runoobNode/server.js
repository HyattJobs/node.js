//引入required模块
var http = require("http")
//创建服务器使用http.createServer()方法创建服务器
//并用listen方法绑定8888端口,通过request,response参数来接受和响应数据
http.createServer(function(request,response){
	//发送HTTP头部
	//http 状态值:200:ok
	//内容类型:text/plain
	response.writeHead(200,{'Content-Type':'text/plain'});

	//发送响应数据"hello world"

	response.end('Hello World\n');
}).listen(8888);

console.log("success");