require('dotenv').config();
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var dbconnect = require('./backend/lib/connectLib');
var config = require('./backend/config/config');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
//require('./backend/lib/dbUsersBootstrap').createUsers();

var app = express();
dbconnect.connect();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

//app.use('/login', loginRouter);
app.use('/users', usersRouter);
var users = require('./backend/models/userModel');

app.post('/api/register', function(req,res){
    console.log(req.body)
    users.find({email : req.body.email }, function (err, data) {
        if(err){ res.status(400).json({msg:"Failed"}); }
        else {//console.log(data);
              if(data.length>0)
              res.status(200).json({msg:"Saved Successful", result : data});
              else
              { 
                
                var add= new users(req.body);
                add.save(function(err,record) {
                if(err){
                    res.redirect("/register");
                }
                else {
                    res.redirect("/personaldetails");
                   }
                });
              }
             }
    });
})



app.post('/api/login', function(req,res){
    console.log(req.body)
    //res.send(req)
    users.find(req.body , function (err, data) {
        if(err){ res.status(400).json({msg:"Failed"}); }
        else if(data.length==1)
        {
            // res.redirect("/main");
            res.json(data)
              
             }
             else{
                //  res.redirect("/login");
             }
    });
})
module.exports = app;
