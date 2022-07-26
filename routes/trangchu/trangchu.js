var express = require('express');
var router = express.Router();
const sql = require('../../data/dbSinhvien/db_tbSinhvien');
const XLSX = require('xlsx');
var path = require('path');

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


router.post('/excel', function(req, res, next) {
  var sampleFile;
  var uploadFile;
    if(!req.files || Object.keys(req.files).length == 0){
      res.status(400).send('No file were uploaded!');
    }
    sampleFile = req.files.excel;
    uploadFile = path.join(__dirname, '../../excel/'+sampleFile.name);
    sampleFile.mv(uploadFile, function(err){
      if(!err){
        const wb = XLSX.readFile(uploadFile);
        const ws = wb.Sheets[wb.SheetNames[0]];
        var xlData = XLSX.utils.sheet_to_json(ws);
        xlData.forEach(entry => {
          sql.addStudent(entry).then(resutl => {
            
          });
        });
        res.redirect('/');
      }else{
        return res.status(400).send(err);
      }
    });
});

router.post('/excelUpdate', function(req, res, next) {
  var sampleFile;
  var uploadFile;
    if(!req.files || Object.keys(req.files).length == 0){
      res.status(400).send('No file were uploaded!');
    }
    sampleFile = req.files.excelUpdate;
    uploadFile = path.join(__dirname, '../../excel/'+sampleFile.name);
    sampleFile.mv(uploadFile, function(err){
      if(!err){
        const wb = XLSX.readFile(uploadFile);
        const ws = wb.Sheets[wb.SheetNames[0]];
        var xlData = XLSX.utils.sheet_to_json(ws);
        xlData.forEach(entry => {
          sql.updateStudent(entry).then(resutl => {
            
          });
        });
        res.redirect('/');
      }else{
        return res.status(400).send(err);
      }
    });
});

module.exports = router;