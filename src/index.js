const express = require('express')
const path = require('path')
var exphbs  = require('express-handlebars'); // it is like render_template from python
var morgan = require('morgan')
const app = express()
const port = process.env.PORT || 3000
//public folder với các file như img ...
app.use(express.static(path.join(__dirname, 'public')));
// mo f12 view console co bieu tuong cua nodejs xai do de debug tren trinh duyet - morgan 
// http logger
app.use(morgan('combined'))


// use engine handle bar template
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.set('views',path.join(__dirname,'resource/views'));

// home path, there is get, post, put, detele ex: app.put 
app.get('/', (req, res) => {
  res.render('home')
})


app.get('/news',(req,res)=>{
  res.render('news')
})


app.get('/order',(req,res)=>{
  res.render('order')
})

app.get('/products',(req,res)=>{
  res.render('products')
})

app.get('/reports',(req,res)=>{
  res.render('reports')
})



app.listen(process.env.PORT|| 3000, () => {
  //console.log(`Example app listening at http://localhost:${port}`)
})