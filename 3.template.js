let express = require('express');
let app = express();
app.listen(3500);
app.set('view engine', 'ejs');
app.set('views', __dirname);
app.get('/', function(req, res) {

    /* 1.先找到这个模块,然后读出模块的内容
     * 2.把模板中的变量替换成对应的值
     * 3.把最终的html返回给客户端
     */

    res.render('index', {
        title: '标题'
    })
})

// res.myRender=function (temp,data) {
//     fs.readFile(path.join(__dirname.temp),'utf8',function(err,result){
//         result=result.replace(/<%=(\w+)%>/,function(input,group1){
// return data[group1];
//         });
//         res.setHeader('Content-Type','text/html');
//         res.send(result);
//     })
//   }