const accountmodel = require('../../models/account')

class registercontroller {
    // [post] /action/register
    register(req, res, next){
       var user = req.body.username
       var pass =  req.body.password
        accountmodel.findOne({ username:user})
            .then(data=> {
                if(data){
                    res.json('already exitsed user')
                }
                else{
                    accountmodel.create({
                               username : user,
                               password : pass  
                           })
                }
            })
            .then(data=> {
                res.json("success created an account");
            })
            .catch(err=> {
                res.status(500).json("failed to create an account");
            })
    }
    //[post] /action/login
    login(req, res,next){
        var user = req.body.username;
        var pass = req.body.password;
        accountmodel.findOne({ username:user,password:pass})
        .then(data=> {
            if(data){
                res.json("dang nhap thanh cong");
            }
            else{
                res.status(300).json('account khong dung');
            }
        })
        .catch(err => {
            res.json('co loi ben server');
        })
    }
}
module.exports = new registercontroller();