const newsRouter = require('./news');
const siteRouter = require('./sites');

function route(app) {
    // app.post('/reports', (req, res) => {
    //     console.log(req.body);
    //     res.send('');
    // });
    app.get('/', siteRouter);
    app.get('/news', newsRouter);
    app.get('/products', siteRouter);
}
// npx kill-port 3000  de end localhost
module.exports = route;