var express = require('express');
var router = express.Router();
var path=require('path')

/* GET home page. */
router.get('/', function(req, res, next) {
  let main=path.join(__dirname,"/../public/html/index.html");
  res.sendFile(main);
  
});
router.get('/login', function(req, res, next) {
  let login=path.join(__dirname,"/../public/html/login.html");
  res.sendFile(login);
  
});
router.get('/register', function(req, res, next) {
  let login=path.join(__dirname,"/../public/html/register.html");
  res.sendFile(login);
  
});
router.get('/personaldetails', function(req, res, next) {
  let personaldetails=path.join(__dirname,"/../public/html/personal-details.html");
  res.sendFile(personaldetails);
});
router.get('/bodymass', function(req, res, next) {
  let bodymass=path.join(__dirname,"/../public/html/body-mass.html");
  res.sendFile(bodymass);
});

module.exports = router;
