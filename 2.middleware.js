let express = require('express');
let app = express();
app.listen(3500);
// use 表示使用一个中间件
// next是继续下一个函数  如果调用表示继续执行下面的路由
app.use(function(req, res, next) {
    console.log('use');
    next();
    // res.end();
})
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