const express = require('express');
const path = require('path');
var exphbs = require('express-handlebars'); // it is like render_template from python
var morgan = require('morgan');
const app = express();
const port = process.env.PORT || 3000;
const route = require('./routes');
//public folder với các file như img ...
app.use(express.static(path.join(__dirname, 'public')));

// this is for get post data in json format
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// http logger use f12
app.use(morgan('combined'));

// use engine handle bar template
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resource/views'));

// route init
route(app);

app.listen(process.env.PORT || 3000, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
