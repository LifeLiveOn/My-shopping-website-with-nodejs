class SitesController{
    //get /
    home(req,res){
        res.render('home');
    }
    // [get] /products
    product(req,res){
        res.render('products')
    }
}

module.exports = new SitesController;