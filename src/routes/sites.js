const express = require('express');
const router = express.Router();
// const sitecontroller = require('../app/controllers/Sitescontrollers');
const products = require('../models/products')
var db = require('../config/db/database');

router.get('/products', (req, res, next) => {
    // use lean to by pass permission from express
    products.find({}).lean()
        .then(Products => {
            res.render('products',{Products})
        })
        .catch(next);
    
});
router.get('/', (req, res) => {
    res.render('home');
});

module.exports = router;
