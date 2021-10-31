const products = require('../../src/models/products')
const express = require('express');
const router = express.Router();
const admincontrollers = require('../app/controllers/Admincontrollers');

router.get('/bills/find',admincontrollers.search);
router.get('/v',admincontrollers.view);
router.get('/bills',admincontrollers.bills);
router.get('/edit/:id',admincontrollers.edit);
router.get('/delete/:id',admincontrollers.delete);
router.get('/',admincontrollers.index);
// bills/find?product_name=

module.exports = router;