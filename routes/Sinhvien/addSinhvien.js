var express = require('express');
var router = express.Router();
const sql = require('../../data/dbSinhvien/db_tbSinhvien');

router.get('/', function(req,res,next){
    res.render('addStudent');
});

router.post('/addhocsinh', function(req, res, next) {
    let student = {...req.body};
    sql.addStudent(student).then(resutl => {
    res.redirect('/');
  })
});

module.exports = router;