class SitesController {
    //get /
    // [get] /products
    product(req, res) {
        res.render('products');
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
