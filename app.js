;

const express = require('express'),
        path = require('path');
const app = express(),
        projectRoot = '/QN';
const bodyParser = require('body-parser');
const dispacher = require('./server/dispather');

//form-data数据需要：multer（multipart/form-data）
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(projectRoot, express.static(path.resolve(__dirname, './webapp'), {
    index: './index.html'
}));

dispacher(app);//分流处理

// 404
app.use(function (req, res, next) {
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
});

//500
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

const server = app.listen(8899, () => {
    let port = server.address().port;
    console.log(`QN服务启动：端口${port}`);
});
