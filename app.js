let express = require('express');
let app = express();
// let http=require('http');
// http.createServer(app).listen(3500);
app.listen(3500);
//请求分发 也叫路由 根据不同路径 进行不同处理
app.get('/index/:id/:name', function(req, res) {
    console.log(req.path); //路径pathname
    console.log(req.query); //查询字符串对象
    console.log(req.host); //主机名localhost
    console.log(req.params); //路径pathname{id:XX,name:xx}
    console.log(res.send); //发送的方法
    res.send({ id: 34 }); //send方法可传入对象 数组会转化为json类型  数字会当成状态码   end不行
    res.sendStatus(200); //专门响应状态码


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