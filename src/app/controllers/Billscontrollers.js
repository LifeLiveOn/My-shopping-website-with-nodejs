// quick example of request parameters;
const bills = require('../../models/bill')
class NewsController {
    //[get] /news
    index(req, res,next) {
        res.render('news');
       // next();
    }
    // add parameters sau / news

    // [get] /news/:id
    show(req, res,next) {
        bills.find({_id:req.params.id}).lean()
            .then(data=>{
                const result = data[0];
                const onedata = data[0].detail;
                var arr = [];
                if(typeof(onedata)=='string'){
                    arr[0] = JSON.parse(onedata);
                    res.render('bills',{result,arr})
                }
                else{
                    const size = result.detail.length
                    for(var i =0;i<size;i++)
                        {
                             arr[i] = JSON.parse(result.detail[i]);
                
                        }
                        res.render('bills', {result,arr});
                    }
            })
    }
}

module.exports = new NewsController();
