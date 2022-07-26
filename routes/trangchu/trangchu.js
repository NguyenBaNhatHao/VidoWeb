var express = require('express');
var router = express.Router();
const sql = require('../../data/dbSinhvien/db_tbSinhvien');
const readXlsxFile = require('read-excel-file/node');
const multer = require("multer");
const XLSX = require('xlsx');

router.get('/', function(req, res, next) {
  sql.getStudents().then(resutl => {
    res.render('layouts/trangchu', { sinhvien: resutl[0] });
  })
});
router.get('/deletestudent/:id', function(req, res, next) {
  sql.DeleteStudent(req.params.id).then(resutl => {
    res.redirect('/');
  })
});

/*excel*/


// router.post('/upload', function(req, res, next) {
//     let student = {...req.body};
//     sql.addStudent(student).then(resutl => {
//     res.redirect('/');
//   })
// });
module.exports = router;