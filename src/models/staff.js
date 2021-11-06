const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const staffSchema = new Schema({
    emp_name: { type: String, default: null, require:true },
    email: { type: String, default: null,require:true },
    store:{type:String,default:null,require:true}
});

module.exports = mongoose.model('staff', staffSchema, 'Staffs');