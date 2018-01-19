var mysql = require('mysql');
var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'iloveyou',
	port: '3306',
	database: 'test',
});

connection.connect();

var sql = "SELECT * FROM websites";

//查
connection.query(sql,function(err,result){
	if(err){
		console.log('[SELECT ERROR]-',err.message);
		return;
	}

	console.log('----------------select----------------');
	console.log(result);
	console.log('--------------------------------------\n\n');
})

connection.end();