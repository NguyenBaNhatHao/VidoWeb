var config = require('../dbConfig');
var sql = require('mssql');
var sinhvienmodel = require('../../models/Sinhvien');
async function getStudents(){

    try {
        let pool = await sql.connect(config);
        let student = await pool.request().query("select * from tb_sinhvien");
        return student.recordsets
         
    } catch (error) {
        console.log(error)
    } 
}

async function getStudentsId(studentId){

    try {
        let pool = await sql.connect(config);
        let student = await pool.request().input('input_parameter',sql.Int, studentId).query("SELECT * FROM tb_sinhvien Where id = @input_parameter");
        return student.recordsets
         
    } catch (error) {
        console.log(error)
    } 
}

async function addStudent(Sinhvien){
    const model = sinhvienmodel.SinhvienModels;
    console.log(model);
    try {
        let pool = await sql.connect(config);
        let student = await pool.request()
        .input('sv_id',sql.NVarChar, Sinhvien.sv_id)
        .input('sv_name',sql.NVarChar, Sinhvien.sv_name)
        .input('sv_ngaysinh',sql.NVarChar, Sinhvien.sv_ngaysinh)
        .input('sv_nganh',sql.NVarChar, Sinhvien.sv_nganh)
        .input('sv_hedaotao',sql.NVarChar, Sinhvien.sv_hedaotao)
        .input('sv_ketqua',sql.NVarChar, Sinhvien.sv_ketqua)
        .input('sv_hinhthuc',sql.NVarChar, Sinhvien.sv_hinhthuc)
        .input('sv_tinhtrang',sql.NVarChar, Sinhvien.sv_tinhtrang)
        .input('sv_email',sql.VarChar, Sinhvien.sv_email)
        .input('img_name',sql.NVarChar, Sinhvien.img_name)
        .input('img_time',sql.NVarChar, Sinhvien.img_time)
        .execute('InsertStudent');
        return student.recordsets
    } catch (error) {
        console.log(error)
    } 
}

async function SearchStudent(Sinhvien){
    
    try {
        let pool = await sql.connect(config);
        let student = await pool.request()
        .input('sv_name',sql.NVarChar, Sinhvien)
        .input('sv_id',sql.NVarChar, Sinhvien)
        .execute('SearchStudent');
        return student.recordsets
    } catch (error) {
        console.log(error)
    } 
}

async function addStudentExcel(Sinhvien){
    try {
        let pool = await sql.connect(config);
        Sinhvien.forEach(element => {
            const model = Object.values(element); 
            let student = pool.request()
            .input('sv_id',sql.NVarChar, model[0])
            .input('sv_name',sql.NVarChar, model[1])
            .input('sv_ngaysinh',sql.NVarChar, model[2]+'/'+model[3]+'/'+model[4])
            .input('sv_hedaotao',sql.NVarChar, model[5])
            .input('sv_nganh',sql.NVarChar, model[6])
            .input('sv_hinhthuc',sql.NVarChar, model[7])
            .input('sv_tinhtrang',sql.NVarChar, model[8])
            .input('sv_ketqua',sql.NVarChar, model[9])
            .input('sv_email',sql.VarChar, model[10])
            .input('img_name',sql.NVarChar, Sinhvien.img_name)
            .input('img_time',sql.NVarChar, Sinhvien.img_time)
            .execute('InsertStudent');
            return student.recordsets;
        });
    } catch (error) {
        console.log(error)
    } 
}

async function updateStudent(Sinhvien){
    
    try {
        let pool = await sql.connect(config);
        let student = await pool.request()
        .input('sv_id',sql.NVarChar, Sinhvien.sv_id)
        .input('sv_name',sql.NVarChar, Sinhvien.sv_name)
        .input('sv_ngaysinh',sql.NVarChar, Sinhvien.sv_ngaysinh)
        .input('sv_nganh',sql.NVarChar, Sinhvien.sv_nganh)
        .input('sv_hedaotao',sql.NVarChar, Sinhvien.sv_hedaotao)
        .input('sv_ketqua',sql.NVarChar, Sinhvien.sv_ketqua)
        .input('sv_hinhthuc',sql.NVarChar, Sinhvien.sv_hinhthuc)
        .input('sv_tinhtrang',sql.NVarChar, Sinhvien.sv_tinhtrang)
        .input('sv_email',sql.VarChar, Sinhvien.sv_email)
        .input('img_name',sql.NVarChar, Sinhvien.img_name)
        .input('img_time',sql.NVarChar, Sinhvien.img_time)
        .input('id', sql.Int, Sinhvien.id)
        .execute('UpdateStudent');
        return student.recordsets
    } catch (error) {
        console.log(error)
    } 
}

async function DeleteStudent(studentId){

    try {
        let pool = await sql.connect(config);
        let student = await pool.request().input('input_parameter',sql.Int, studentId).query("DELETE FROM tb_sinhvien Where id = @input_parameter");
        return student.recordsets
         
    } catch (error) {
        console.log(error)
    } 
}

module.exports = {
    getStudents : getStudents,
    getStudentsId : getStudentsId,
    addStudent : addStudent,
    updateStudent : updateStudent,
    DeleteStudent : DeleteStudent,
    addStudentExcel : addStudentExcel,
    SearchStudent : SearchStudent
}