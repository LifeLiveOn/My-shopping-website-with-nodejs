const products = require('../../models/products')
var db = require('../../config/db/database');

class ProductsController {
    //[get] /products/:slug
    show(req,res,next){
        products.findOne({slug:req.params.slug}).lean()
            .then(Products =>{
                
                //res.json(Products)
                res.render('products/details',{Products})
            })
            .catch(next);
        //res.send('Product details-' + req.params.slug);
    }
}

module.exports = new ProductsController();