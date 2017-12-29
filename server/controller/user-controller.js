;
const express = require('express'),
router = express.Router();

const userService = require('../service/user-service');

router.post('/sign-in', function (req, res) {
    res.json(userService.register(req.body));
});
router.post('/login', function (req, res) {
    res.json(userService.login(req.body));
});
router.get('/validate-user', function (req, res) {
    res.send(userService.validateUserDuplicated(req.query['userName']));
});

module.exports =  router;