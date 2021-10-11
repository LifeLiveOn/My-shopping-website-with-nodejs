const express = require('express');
const router = express.Router();
const sitecontroller = require('../app/controllers/Sitescontrollers');

router.use('/order',sitecontroller.order);
router.use('/reports',sitecontroller.report);
router.use('/product',sitecontroller.product);
router.use('/', sitecontroller.home);

module.exports = router;