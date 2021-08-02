// alert('Hi JavaScrpit basic!')
var fullName = "Nguyen Chi Cong";
var age = 19;
// không có dấu ; thì nó không viết đc lên chung 1 dòng

// alert(fullName);// hàm để hiển thị giá trị
// alert(age);
// cái alert hiện lần lượt từng cái chứ không hiện chungg 1 lượt

// console.log('day la 1 thong bao');
// console... ->  warn ,error...
console.log(fullName);

confirm("Xac Nhan Ban Du Tuoi?");
// hộp thoại dùng để xác nhận
prompt("XAC NHAN BAN DU TUOI!");
// TẠO RA MỘT HỘP ĐỂ ĐIỀN GIÁ TRỊ NGƯỜI DÙNG CÓ THỂ YES AND CANCLE

// setTimeout(function() {
//     alert('Thong Bao!');
// },1000)
//thông báo code sao khoảng time nhất định ko lặp lại

// ví dụ 1
// setInterval(function() {
//     console.log('Thong bao!');
// },1000)
// ví dụ 2
// setInterval(function() {
//     console.log('Day la log' + Math.random());
// },1000)
//thông báo code trong khoảng time nhất định lặp đi lặp lại

// var a=2,
//     b=3;
// var c= a / b;
// // c= a- b -> c = a * b -> c = a++ -> c = a-- ;
// // c= a / b -> c= a % b -> c= a ** b ;
// console.log(c);
var a = 1;
var b = 2;
if (a != b) {
  // (a!=b) (a>=b)(a<=b)...
  console.log("true");
} else {
  console.log("fasle");
}
//kiểu dữ liệu nguyên thuỷ
//Number type
var a = 1;
var b = 2;
var c = 3;
console.log(typeof a);
// -> kiem tra kdl kieu so

//string typeF
var fullName = "Chi Cong";
console.log(typeof fullName);
//boolean type
var fullName = "isSuccess";
console.log(typeof fullName);

//kiểu dữ liệu phức tạp

var myFunction = function () {
  alert("Hello.Xin Chao Cac ban!");
};
myFunction();

//Object types
var myObject = {
  name: "Chi Cong",
  age: 18,
  adress: "Ca Mau",
  myFunction: function () {},
};

console.log("myObject", myObject);

var myArray = ["Javascript", "PHP", "Ruby"];

console.log("myArray", myArray);

var a = 1;
var b = 2;
var result = a < b && a < 0;
console.log("result", result);
// trả ra giá trị true
// if(result)// trong đây là giá trị true
// {
//     console.log('A<B');
// }
// else
// {
//     console.log('A>B');
// }
