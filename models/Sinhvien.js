const SinhvienModels ={
  sv_id: {type: String, require: true},
  sv_name: {type: String, require: false},
  sv_ngaysinh: {type: String, require: false},
  sv_nganh: {type: String, require: false},
  sv_hedaotao: {type: String, require: false},
  sv_ketqua: {type: String, require: false},
  sv_hinhthuc: {type: String, require: false},
  sv_tinhtrang: {type: String, require: false},
  sv_email: {type: String, require: false}
};
class Sinhvien{
    constructor(sv_id,sv_name,sv_ngaysinh,sv_nganh,sv_hedaotao,sv_ketqua,sv_hinhthuc,sv_tinhtrang,sv_email,img_name,img_time){
      this.sv_id = sv_id;
      this.sv_name = sv_name;
      this.sv_ngaysinh = sv_ngaysinh;
      this.sv_nganh = sv_nganh;
      this.sv_hedaotao = sv_hedaotao;
      this.sv_ketqua = sv_ketqua;
      this.sv_hinhthuc = sv_hinhthuc;
      this.sv_tinhtrang = sv_tinhtrang;
      this.sv_email = sv_email;
      this.img_name = img_name;
      this.img_time = img_time;
    }
  }
  
module.exports = {
    Sinhvien,
    SinhvienModels : SinhvienModels
}