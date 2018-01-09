/*框架express
*
* 导入多需要的模块包
* */

var request  = require('request'); //协议交互模块
var http = require('http');
var fs = require('fs'); //文件操作
var express = require('express');//express 4框架
var bodyParser = require('body-parser');
var AipFaceClient = require("baidu-aip-sdk").face;
// console.log(AipFace);

var app = express(); //实例化express

// 设置APPID/AK/SK
var APP_ID = "10658492";
var API_KEY = "p9tKAcgGs6ydsynvMdCdGRT2";
var SECRET_KEY = "c2a3ClCUOxsNv1KiqQayaGFgIKIG42XL";
// 新建一个对象，建议只保存一个对象调用服务接口
var client = new AipFaceClient(APP_ID, API_KEY, SECRET_KEY);

var image = fs.readFileSync('images/my01.jpg'); //读取照片文件
//img文件对象 利用buffer toString base64方法转化为base64格式数据

var base64Img = new Buffer(image).toString('base64');
/*
*   人脸识别 准备一个 标准图片
*       通过别人人脸检测 生成参数图片
*       便准图片 对比 参数图片 进行计算
*
* */


// 调用人脸检测
// 如果有可选参数
var options = {};
options["max_face_num"] = "1";
options["face_fields"] = "age";

/*// 带参数调用人脸检测
client.detect(base64Img, options).then(function(result) {
    console.log(JSON.stringify(result));
}).catch(function(err) {
    // 如果发生网络错误
    console.log(err);
});;*/

app.use(bodyParser.urlencoded({extened:true,limit:'50mb'}));

//跨域
app.all('*',function(req,res,next){
    res.header('Access-Control-Allow-Origin','*');
    next();
});

app.post('/',function (req,res) {
    //console.log(req.body);
    //res.json('hello');//向客户端发送数据

    var imgData = req.body.imgUrl;//传输过来的
    var base64Data = imgData.replace(/\s/g,'+'); //去空格  trim也可以去空格,但是效率低
    base64Data = base64Data.replace(/^data:image\/\w+;base64,/,'');

    //console.log(base64Data);
    // 调用人脸比对
    //console.log(base64Img);
    var bImages = [base64Img,base64Data];

    client.match(bImages).then(function(result) {
       // console.log(JSON.stringify(result));
/*      json正常的格式
        {
            "result": [
            {
                "index_i": "0",
                "index_j": "1",
                "score": 93.045127868652
            }
        ],
            "result_num": 1,
            "log_id": 3654741526010918
        }*/


        var score = result.result[0].score;
        res.json(score); //向客户端发送数据
    }).catch(function(err) {
        // 如果发生网络错误
        console.log(err);
    });
}).listen(80); //访问都是80端口
/*[].forEach.call($$('*'),function(item){item.style.border='1px solid red'})  骚操作*/
