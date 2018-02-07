import { urlencoded } from './C:/Users/Administrator/AppData/Local/Microsoft/TypeScript/2.6/node_modules/@types/express';

let express = require('express');
let app = express();
let fs = require('fs');
let bodyParser = require('body-parser'); //请求体解析器
app.use(bodyParser.urlencoded({ extended: true }));
//为true使用express自带解析器解析  为false 是用自己封装的解析
app.get('/', function(req, res) {
    fs.createReadStream('./index.html').pipe(res);
})
app.post('/login', function(req, res) {
    console.log(req.body);
    res.send(req.body);
})

/*
* body-parser 实现
let querystring=require('querystring');
app.use(function(req,res,next){
let str='';
req.on('data',function(data){
    str+=data.toString();
});
req.on('end',function (data) {
    req.body=querystring.parse(str);
    //将字符串转化为对象
    next();
  })
})
*/