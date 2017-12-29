;
const menuController = require('./controller/menu-controller');
const productController = require('./controller/product-controller');
const userCtrl = require('./controller/user-controller');
module.exports = function(app){
    app.use('/QN', function(req, res, next){
        //每个请求都会经过这里:可以做拦截、校验等等相关操作
        console.log('请求来了');
        next();
    });
    app.use('/QN/menu', menuController);
    app.use('/QN/product', productController);
    app.use('/QN/user', userCtrl);
};