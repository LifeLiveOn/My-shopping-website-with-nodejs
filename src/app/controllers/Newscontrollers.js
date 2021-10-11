class NewsController{
    
    index(req,res){
        res.render('news');
    }
    // them parameters sau / news
    // [get] /news/:slug 
    show(req,res){
        res.send('NEWS DETAIL')
    }
}

module.exports = new NewsController;
