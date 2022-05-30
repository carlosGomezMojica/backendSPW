const express = require('express')
var router = express.Router()

let authContreller = require('./controller')

router.post('/login', authContreller.login);

module.exports = router