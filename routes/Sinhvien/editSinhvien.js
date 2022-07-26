var express = require('express');
var router = express.Router();
const sql = require('../../data/dbSinhvien/db_tbSinhvien');

router.get('/:id', function(req, res, next) {
    sql.getStudentsId(req.params.id).then(resutl => {
    res.render('editStudent', {sinhvien: resutl[0]});
  })
});

router.post('/:id', function(req, res, next) {
    let student = {...req.body};
    sql.updateStudent(student).then(resutl => {
    res.redirect('/');
  })
});

module.exports = router;