const express = require('express');
const path = require('path');
var exphbs = require('express-handlebars'); // it is like render_template from python
var morgan = require('morgan');
const app = express();
const port = process.env.PORT || 3000;
const route = require('./routes');
app.use(express.static(path.join(__dirname, 'public')));  //allow to use public folder to access css and images
app.use(express.urlencoded({ extended: true })); // this is for get post data in json format
app.use(express.json());
app.use(morgan('combined')); // http logger use f12
// use engine handle bar template
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resource/views'));

// use data base 
const db = require('./config/db/database')
db.conn;
// route init
route(app);

app.listen(process.env.PORT || 3000, () => {
    console.log(`app listening at http://localhost:${port}`);
});
