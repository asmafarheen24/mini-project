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
router.get('/main', function(req, res, next) {
  let k=path.join(__dirname,"/../public/html/main.html");
  res.sendFile(k);
});
router.get('/hn', function(req, res, next) {
  let hn=path.join(__dirname,"/../public/html/hn.html");
  res.sendFile(hn);
});
router.get('/hv', function(req, res, next) {
  let hv=path.join(__dirname,"/../public/html/hv.html");
  res.sendFile(hv);
});

router.get('/on', function(req, res, next) {
  let on=path.join(__dirname,"/../public/html/on.html");
  res.sendFile(on);
});

router.get('/ov', function(req, res, next) {
  let ov=path.join(__dirname,"/../public/html/ov.html");
  res.sendFile(ov);
});


module.exports = router;
