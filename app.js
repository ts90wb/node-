let express = require('express');
let app = express();
app.listen(3500);
//请求分发 也叫路由 根据不同路径 进行不同处理
app.get('/index', function(req, res) {
    res.end('index');
});
app.get('/home', function(req, res) {
    res.setHeader('Content-Type', 'text/plain;charset=utf-8');
    res.end('首页');
});
//匹配GET请求的任意路径
app.get('*', function(req, res) {
    res.end('404');
});
//all表示匹配所有的路径
app.all('*', function(req, res) {
    res.end('404');
});