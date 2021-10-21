const express = require('express');
const router = express.Router();
const productcontroller = require('../app/controllers/Productscontroller');

router.get('/create',productcontroller.create);
router.post('/add',productcontroller.add);
router.get('/:slug', productcontroller.show);

module.exports = router;
