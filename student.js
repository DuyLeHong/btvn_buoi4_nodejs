module.exports =  class Student {
    constructor(ten, mssv, diemTB) {
        this.ten = ten;
        this.mssv = mssv;
        this.diemTB = diemTB;
    }
    getInfor = function (){
        return `${this.ten}- ${this.mssv} - ${this.getDiemTB()} \n`;
    }

    getDiemTB = function (){
        var diemTB = 6 + Math.floor(Math.random() * 5);
        return diemTB;
    }
}