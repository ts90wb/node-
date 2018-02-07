function express() {
    function app() {}
    //配置中间件
    app.fns = [];

    app.use = function(fn) {
            this.fns.push({
                path: '/',
                fn: fn
            });
        }
        //配置路由
    app.get = function(path, fn) {
        if (typeof path == 'function') {
            fn = path;
            path = '/';
        }
        this.fns.push({
            path: path,
            fn: fn

        });
    }
    app.start = function(req, res) {
        var i = 0; //当前层索引

        function next() {
            var layer = app.fns[i++];
            if (req.url.indexOf(layer.path) == 0) {
                layer.fn(req, res.next)
            } else {
                next();
            }
        }
        next();
    }

    return app;
}
module.exports = myExpress;