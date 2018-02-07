let express = require('express');
let app = express();
let fs = require('fs');
let bodyParser = require('body-parser'); //请求体解析器
app.listen(3500);
app.use(bodyParser.urlencoded({ extended: true }));
//为true使用express自带解析器解析  为false 是用自己封装的解析
app.get('/', function(req, res) {
    fs.createReadStream('./index.html').pipe(res);
});
app.get('/login', function(req, res) {
    fs.createReadStream('./login.html').pipe(res);
});
app.get('/home', function(req, res) {
    fs.createReadStream('./home.html').pipe(res);
});
app.post('/login', function(req, res) {
    console.log(req.body);
    if (req.body.username) {
        //重定向 让客户端向/home再发起请求
        res.redirect('/home');
    } else {
        res.redirect('/login');
    }
});