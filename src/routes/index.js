const newsRouter = require('./news');
const siteRouter = require('./sites');
const productsRouter = require('./products');
function route(app) {
    // app.post('/reports', (req, res) => {
    //     console.log(req.body);
    //     res.send('');
    // });
   app.get('/', siteRouter); // go to /routes sites.js
   app.get('/news', newsRouter);
   app.get('/news/:id',newsRouter);
   app.get('/products', siteRouter);
   app.get('/products/:slug',productsRouter);
}

module.exports = route;