// quick example of request parameters;
class NewsController {
    index(req, res) {
        res.render('news');
    }
    // add parameters sau / news
    // [get] /news/:slug
    show(req, res) {
        res.send('' + req.params.id);
    }
}

module.exports = new NewsController();
