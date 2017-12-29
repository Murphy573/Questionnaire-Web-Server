;
const express = require('express'),
router = express.Router();

const productService = require('../service/product-service');

router.get('/getProducts', function (req, res) {
    res.json(productService.getProducts(req.query));
});

router.post('/getProductById', function (req, res) {
    res.json(productService.getProductByID(req.body['id']));
});

router.get('/getAllProductCategories', function (req, res) {
    res.json(productService.getAllProductCategories());
});

router.get('/getProductComment/:id', function (req, res) {
    res.json(productService.getProductComment(req.params['id']));
});

router.post('/addProductComment', function (req, res) {
    res.send(productService.addProductComment(req.body));
});

module.exports =  router;