const products = require('../../models/products')
var db = require('../../config/db/database');

class ProductsController {
    //[get] /products/:slug
    show(req,res){
        res.send('Product details ' + req.params.slug);
    }
}

module.exports = new ProductsController();