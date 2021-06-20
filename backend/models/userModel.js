var mongoose= require('mongoose');

var dataSchema =new mongoose.Schema({
    username : String,
    email : String,
    password : String,
    isDeleted : {type:Boolean,default:false}
    
    
    });
    module.exports =mongoose.model('user', dataSchema);