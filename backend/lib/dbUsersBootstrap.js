var userModel=require('../models/userModel'); 



module.exports.createUsers=function(){
    userModel.find({}, function(err,collection){
        if(collection.length==0){
         var userJson= {username:'user',password:'user',email:'user@gmail.com'}
        var adminJson= {username:'admin',password:'admin',email:'admin@gmail.com'}
        userModel.create(userJson);// belowcommeted lines can b done using this
    userModel.create(adminJson);
    console.log("users created");
        }
        else
        {
            console.log("users alredy exist");
        }
    })
}