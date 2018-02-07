let express = require('express');
let fs = require('fs');
let app = express();
let path = require('path');
app.listen(3500);
// app.use(express.static(__dirname));
// app.use(express.static(path.join(__dirname, 'views'))); //直接访问index
app.use(function(req, res, next) {
    console.log(req.url, res);
    fs.createReadStream('.' + req.url).pipe(res);
})