const express = require('express');
const router = express.Router();
const staffdb = require('../models/staff');

//add staff to database
router.post('/add',(req,res,next)=>{
    formData = req.body;
    const staffdata = new staffdb(formData);
    staffdata.save();
    res.render('staff/add');
})
// get to create staff form
router.get('/create',(req,res,next)=>{
    res.render('staff/add')
})

//delete staff 
router.get('/delete',(req,res,next)=>{
    const id = req.query;
    staffdb.findByIdAndRemove({_id:id.id}).lean()
        .then(res.redirect('/staff'))
})
/// view staff
router.get('/',(req,res,next)=>{
    staffdb.find({}).lean()
        .then(data=>{
            res.render('staff/view',{data});
        })
        .catch(next);
})

module.exports = router;