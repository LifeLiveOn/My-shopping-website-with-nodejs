const newsRouter = require('./news');
const siteRouter = require('./sites');

function route(app){

    
    app.use('/news',newsRouter);
    //app.use('/',siteRouter);
    app.use('/products',siteRouter);

    // app.get('/order',(req,res)=>{
    //     res.render('order')
    // })
      
    // // app.get('/products',(req,res)=>{
    // //     res.render('products')
    // //   })
    
    // app.get('/reports',(req,res)=>{
    //     res.render('reports')
    //   })
      
    // app.post('/reports',(req,res)=>{
    //     console.log(req.body)
    //     res.send('')
    //   })
}

module.exports = route;

