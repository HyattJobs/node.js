//����requiredģ��
var http = require("http")
//����������ʹ��http.createServer()��������������
//����listen������8888�˿�,ͨ��request,response���������ܺ���Ӧ����
http.createServer(function(request,response){
	//����HTTPͷ��
	//http ״ֵ̬:200:ok
	//��������:text/plain
	response.writeHead(200,{'Content-Type':'text/plain'});

	//������Ӧ����"hello world"

	response.end('Hello World\n');
}).listen(8888);

console.log("success");