let express = require('express');
let app = express();
app.listen(3500);
//请求分发 也叫路由 根据不同路径 进行不同处理
app.get('/index', function(req, res) {
    res.end('index');
})
app.get('/home', function(req, res) {
    res.end('home');
})