const express = require('express');
const router = express.Router();
const regcontroll = require('../app/controllers/registercontroller')

router.post('/register',regcontroll.register)
router.post('/login',regcontroll.login)
module.exports = router;