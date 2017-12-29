;
const express = require('express'),
router = express.Router();

const menuService = require('../service/menu-service');

router.post('/queryMenus', function (req, res) {
    res.json(menuService.queryMenus(req.body));
});

module.exports =  router;