class controllers {
    //[Get] /news
    index(req,res){
        res.render('news');
    }
}
// xuat ra ngoai cai instance cua class
module.exports = new controllers;