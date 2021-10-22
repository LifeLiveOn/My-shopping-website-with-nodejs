const newsRouter = require('./news');
const siteRouter = require('./sites');
const productsRouter = require('./products');
const admincontrollers = require('./admin');
function route(app) { // go to /routes sites.js
   app.use('/news', newsRouter); // test code page 
   app.use('/products', productsRouter); // product page 
   app.use('/adminmanage',admincontrollers); // admin page
   app.use('/', siteRouter); // home page 
}

module.exports = route;