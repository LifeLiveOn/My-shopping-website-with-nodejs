var mongoose = require('mongoose');
mongoose.connect(process.env.MongoDB_URL || 'mongodb://localhost:27017/toy_store_dev', {
    useNewUrlParser: true,
});
//mongodb+srv://tnkchaseme:23062002l@cluster0.a3acr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
var conn = mongoose.connection;
conn.on('connected', function () {
    console.log('database is connected successfully');
});
conn.on('disconnected', function () {
    console.log('database is disconnected successfully');
});
conn.on('error', console.error.bind(console, 'connection error:'));
module.exports = conn;
