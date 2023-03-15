var http = require('http');
var fs = require('fs');
var utils =  require('./utils.js');
const NhanVien = utils.NhanVien;
const Student = require('./student.js');
tinhThuong = function (a, b) {
  return (a/b);
} 

function showInfo (mess) {
  if(typeof mess == 'string'){
    console.log(mess.toUpperCase());
  } else {
    console.log('Thong bao khong hop le!');
  }
 
}


http.createServer(function (req, res) {
  fs.readFile('package.jsion', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    
   

    let st1 = new Student ('Tran Ngoc Tien', 'PH19989');
    res.write(st1.getInfor());

    let nv1 = new NhanVien ('Tien', 'PH19989');
    res.write(nv1.getInfor());

    // fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
    //   if (err) throw err;
    //   console.log('Saved!');
    // });

    // fs.open('mynewfile2.txt', 'w', function (err, file) {
    //   if (err) throw err;
    //   console.log('Saved!');
    // });
    
    fs.writeFile('mynewfile1.txt', 'Hello content!', function (err) {
      if (err) throw err;
      console.log('Saved!');
    });
    return res.end();
  });
}).listen(8080);



// var http = require('http');
// var fs = require('fs');
// http.createServer(function (req, res) {
//   fs.readFile('demofile1.html', function(err, data) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write(data);
//     return res.end();
//   });
// }).listen(8080);