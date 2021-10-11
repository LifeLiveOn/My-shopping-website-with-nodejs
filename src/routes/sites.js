const express = require('express');
const router = express.Router();
const sitecontroller = require('../app/controllers/Sitescontrollers');

router.use('/products',sitecontroller.product);
//router.use('/', sitecontroller.home);

module.exports = router;