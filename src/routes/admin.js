const products = require('../../src/models/products')
const express = require('express');
const router = express.Router();
const admincontrollers = require('../app/controllers/Admincontrollers');

//adminmanage/ nhung cai duoi
router.get('/updateqty',admincontrollers.updateqty);
router.get('/bills',admincontrollers.bills);
router.post('/printbill',admincontrollers.printbill);
router.get('/bills/find',admincontrollers.search2);
router.get('/bills/add/:id',admincontrollers.toCart);
router.get('/bills/delcart/:id',admincontrollers.delcart);
router.get('/bills/clear',admincontrollers.clear);



router.get('/v',admincontrollers.view);
router.get('/edit/:id',admincontrollers.edit);
router.get('/delete/:id',admincontrollers.delete);
router.get('/',admincontrollers.index);
// bills/find?product_name=

module.exports = router;