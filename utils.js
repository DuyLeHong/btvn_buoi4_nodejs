exports.myDateTime = function () {
    return Date();
};

exports.tinhTong = function (a, b){
    var tong = a + b;
    return tong;
}
exports.NhanVien = function(ten, msnv){
    this.ten = ten;
    this.msnv = msnv;
    this.getInfor = function(){
        return `${this.ten} ${this.msnv}`;
    }
}