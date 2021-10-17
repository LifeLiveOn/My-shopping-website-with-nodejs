const express = require('express');
const router = express.Router();
const productcontroller = require('../app/controllers/Productscontroller');

router.get('/products/:slug', productcontroller.show);


module.exports = router;
