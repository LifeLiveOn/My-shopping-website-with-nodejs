const products = require('../../models/products')
var db = require('../../config/db/database');
class Admincontrollers{
    // [get] main menu path: /adminmanage
    index(req, res,next){
        res.render('admin/adminmenu');
    }

    view(req, res, next){
        products.find({}).lean()
            .then(Products => {
                res.render('admin/viewall',{Products})
            })
            .catch(next);
    }
    // [get] /adminmanage/edit/:id
    edit(req, res,next){
        products.findById(req.params.id).lean()
            // .then(products => res.json(products))
            .then(Products =>{
                //res.json(Products)
                res.render('products/edit',{Products})
            })
            .catch(next);

    }

}
module.exports = new Admincontrollers();