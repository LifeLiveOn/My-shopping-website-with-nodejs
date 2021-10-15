const products = require('../../models/products')
var db = require('../../config/db/database');

class SitesController {
    
    // [get] /product
    product(req, res) {
        products.find({}, function (err, Products) {
            try{
                res.json(Products);
            } 
            catch(error){res.status(400).json({error:"error!!"});}
          });
        // res.render('products',{
        //     list_of_products : [
        //         {"name":"woody","price":1500,"images":"img/woody.jpg"},
        //         {"name":"buzz","price":1000,"images":"img/buzz.jpg"},
        //         {"name":"khunglong","price":500,"images":"img/khunglong.jpg"}
        //     ]
        // });
    }
    order(req, res) {
        res.render('order');
    }
    report(req, res) {
        res.render('reports');
    }
    home(req, res) {
        res.render('home');
    }
}

module.exports = new SitesController();
