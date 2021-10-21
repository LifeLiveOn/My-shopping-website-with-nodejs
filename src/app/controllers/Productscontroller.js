// this handle product details pages 
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


    //[get] /products/create
    create(req,res,next){
       // res.json(req.body);
        res.render('products/create');
    }
    //[Post] /products/add (add to database)
    add(req,res,next){
        //console.log(req.body);
        const formData = req.body;
        console.log(req.body.image)
        formData.image = "img/"+req.body.image;
        formData.slug = formData.product_name + formData.category;
        const product = new products(formData);
        product.save()
            .then(() => res.redirect('/products'))
            .catch(error =>{

            });
        //res.send('Product save to database');
       
    }
}

module.exports = new ProductsController();