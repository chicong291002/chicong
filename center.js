//Chuỗi trong JavaScript
//  var fullName ='Nguyen \'Pheo\' Chi Cong';

// var fullName=new String('Chi Cong');
// // alert(fullName);
// console.log(typeof fullName);
// var fullName='chi cong';
// var firstName='Tai Nang';
// var lastName='Tu Duy Dinh Cao';
// console.log(fullName.length);
// // console.log('Toi la:'+firstName+' '+lastName);
// console.log(`Toi la:${firstName} ${lastName}`);
// var commentText ="Học chưa hiểu là học chưa đủ!";
// var authorName="Sơn Đặng:";
// var fullCommentText=`${authorName} ${commentText}`;
// console.log(fullCommentText);

//*************LÀM VIỆC VỚI CHUỖI***********

// var myString='Hoc lap trinh JS tai F8 va JS';
// var myString ='     Hoc JS tai JS JS F8!     ';

//keyword:Javascript string methods
//1.Length
// console.log(myString.length);

//2.Find index
// console.log(myString.indexOf('JS'));
//nếu = -1 là không tìm thấy
// console.log(myString.indexOf('JS',20));
//bắt đầu tìm JS tại vị trí thứ 12 trở lên

// console.log(myString.lastIndexOf('JS'));
//Tìm kiếm vị trí cuối cùng của Từ cần tìm lên

// console.log(myString.search('JS'));
//tìm kiếm js không hỗ trợ tìm từ bắt đầu
//  từ vị trí cần chọn như indexOf

//3.Cut string
// console.log(myString.slice(4,6));

// in ra JS,slice là trong đó bao gồm
// vị trí bắt đầu và kết thúc

// console.log(myString.slice(4));
//là từ 1 vị trí bắt đầu cho đến hết

// console.log(myString.slice(0));
// cắt từ đầu tới cuối

// console.log(myString.slice(-3,-1));
// cắt từ phải sang trái bắt đầu từ -3 và kết thúc tại -1

//4.Replace
// console.log(myString.replace('JS','JavaScript'));
//ĐỔI CHỮ JS ĐẦU TIÊN THÀNH CHỮ JavaScript còn lại giữ nguyên

// console.log(myString.replace(/JS/g,'JavaScript'));
//đổi tất cả các chữ JS thành JavaScript

//5. Convert to upper case
// console.log(myString.toUpperCase());
// chuyển tất cả các chữ trong myString thành chữ hoa

//6.Convert to lower case
// console.log(myString.toLowerCase());
// chuyển tất cả các chữ trong myString thành chữ thường

//7. Trim
// console.log(myString.trim());
// console.log(myString.trim.length());

//loại bỏ kí tự khoảng trắng tại 2 đầu
//8. Split
// var languages='Java, phython, C++';
// console.log(languages.split(', '));
// tìm điểm chung trong phần dữ liệu của biến và cách nó ra theo array

// console.log(languages.split(''));
// cach ra từng chuỗi một trong biến của languages

//9. Get a character by index

// const myString2='Chi Cong';
// console.log(myString2.charAt(0));

// in ra kí tự = 1 dữ liệu cho trước
// console.log(myString2.charAt(10));
//nếu nó ko nằm trong dữ liệu in ra khoảng trắng

// console.log(typeof myString2.charAt(10));
//in ra dữ liệu là String

//cách số 2
// console.log(myString2[0]);
//lấy kí tự theo vị trí tại 0 là C
// console.log(typeof myString2[10]);

//không có nó trả về là undefined

// var commentText='hi';
// function run(commentText) {
//     var textLength = console.log(commentText.length);
//     return textLength;
// }
// run(commentText);

//******NUMBER */
// var PI=3.14;
// var age=19;
// console.log(age.toString());
// đổi kiểu dữ liệu number thành string

// var myString=age.toString();
// console.log(myString);
// console.log(typeof myString);

// console.log(typeof PI.toFixed());
// nếu dưới 0.5 thì làm tròn dưới
// lớn hơn hoặc bằng 0.5 làm tròn trên
// mặc định là số 0
// console.log(PI.toFixed(2));

/**************** MẢNG *************88*/

//cách 1 tạo mảng
// var languages=[
//     'Javascript',
//     'PHP',
//     'Ruby',
//      null,
//     undefined,
//     NaN,
//     function(){

//     },
//     {}
//     // chứa đc tất cả các phần tử
// ];
// console.log(languages);

//cách 2 tạo mảng
// var languages=new Array(
//     'Javascript',
//     'PHP',
//     'Ruby',
//      null,
//     undefined,
//     NaN,
//     function(){

//     },
//     {}

// );
// console.log(languages);
// // nên sử dụng cách 1
// console.log(typeof languages);
// //kiểu tra kiểu dữ liệu array
// console.log(typeof {});
// //kiểu dữ liệu "[] và {}" cũng là một object

// //cách để kiểm tra kiểu dữ liệu có phải là array hay không

// console.log(Array.isArray(languages));//true
// console.log(Array.isArray({}));//FALSE
// console.log(Array.isArray([]));//TRUE
// console.log(Array.isArray(newArray(1,2,3)));//true

// // Truy xuất độ dài mảng
// console.log(languages.length);
// //truy xuất độ dài theo index(chỉ mục,key)
// console.log(languages[0]);

// bài tập:cho biến input là 1 array bất kì
// gán result = giá trị phần tử cuối cùng
// Giải thích: Để lấy được phần tử cuối cùng
//  trong mảng ta cần phải biết độ dài của mảng
//   và lấy độ dài của mảng trừ đi 1 thì sẽ
//    được index cuối cùng của mảng sau đó
//     truy xuất phần tử đó và xuất ra màn hình.

// function getLastElementOfArray(input) {
//   var result;
//   result = input[input.length - 1];
//   return result;
// }

/**  LÀM VIỆC VỚI MẢNG
 * 1.to String
 * 2.join
 * 3.Pop
 * 4.Push
 * 5. Shift
 * 6. UnShift
 * 7. Splicing
 * 8. Concat
 * 9. slicing
 **/
// var languages = ["Javascript", "PHP", "Ruby"];
//*******************1***************

// console.log(languages.toString());
//chuyển đổi kiểu dữ liệu array thành kiểu dữ liệu mảng
//*******************2***************

// console.log(languages.join(''));

// console.log(languages.join(' - '));
//tương tự toString nhưng trong
// join có thể thêm vào để thay đổi

/*********************3*********/
// console.log(languages.pop());
//xoá phần tử cuối cùng của mảng
//và trả về phần tử đã xoá
//nếu gọi console.log(languages.pop());
// thì sẽ xoá tiếp thêm 1 phần tử cuối
// đến khi không còn p tử nào thì sẽ undefined

//*******************4***************

//push thêm 1 phần tử vào 1 hay nhiều vào cuối mảng
//trả về độ dài ở cuối mảng
//For example 1
// console.log(languages.push('Dart'));
// thêm vào 1 phan tu
// For example 2
// console.log(languages.push('Dart','Java'));
//THÊM VÀO 2 PHẦN TỬ
// console.log(languages);

//*******************5***************
// console.log(languages.shift());
//xoá 1 phần tử ở đầu mảng và trả về phần tử ở đầu mảng
// console.log(languages.shift());
// console.log(languages.shift());
// tạo thêm một console.log(languages.shift());
// là xoá thêm 1 phần tử ở đầu mảng nếu ko còn p tử
// nào thì nó sẽ trở về undefined
// console.log(languages);

//*******************6***************
// console.log(languages.unshift('Dart'));
//  console.log(languages.unshift('Dart','Java'));
//thêm một hoặc nhiều phần tử vào
//  đầu mảng và in ra độ dài mới của mảng
//  console.log(languages);

//*******************7***************

//splicing có thể xoá,cắt ,chèn phần tử mới vào mảng
// console.log(languages.splice(1,1));
//splice(1,1) 1 đầu tiên là chỉ vị trí của con trỏ chuột
// 1 thứ 2 là xoá  1 phần tử bắt đầu từ vị trí 1

// console.log(languages.splice(1,2));
//splice(1,1) 1 đầu tiên là chỉ vị trí của con trỏ chuột
// 1 thứ 2 là xoá  2 phần tử bắt đầu từ vị trí 1

// languages.splice(1,0,'Dart');
// chèn thêm 1 phần tử vào vị trí con chuột tại vị trí
// index 1 và không xoá phần tử
//languages.splice(1,1,'Dart');
//xoá phần tử tại vị trí 1 và thay = Dart
// languages.splice(1,1,'Dart','Java');
// console.log(languages);

/***************8 **********/
// nối chuỗi

// var languages=[
//   'JS',
//   'Ruby'
// ];

//  var languages2 =[
//  'Phython',
//  'Java',
//  ];
//  console.log(languages.concat(languages2));

// mảng nào ghi trc thì vị trí nó trc

/***************9 **********/
// console.log(languages.slice(1,2));
//->PHP
//dùng để cắt 1 vài element của mảng
// console.log(languages.slice(0));
//-> JavaScript,PHP,RUBY
// console.log(languages.slice(1));
//-> PHP,RUBY
//copy

//TRUYỀN VÀO SỐ ÂM ĐỂ LẤY PHẦN TỬ CUỐI MẢNG

// console.log(languages.slice(-2,-1));
//->PHP
// anArray=[
//   'php',
//   'java',
//   'c++',
// ];
// function run(anArray) {
//         if(anArray<anArray.length)
//         {
//         anArray.shift();
//         }
//         else{
//             anArray=anArray.splice(-2,2);
//         }
//     return anArray;
// }
// console.log(run(anArray));
// var animals = ["php", "math", "javascript", "phython"];
// function run(animals) {
//   if (animals.length == "") {  
//     animals.splice(0, 0, "Cat", "Mouse");
//   } else if (animals.length == 1) {
//     animals.splice(0, 0, "Elephant");
//   } else if (animals.length > 2) {
//     animals.splice(2, 1, "Monkey", "Tiger");
//   }
//   return animals;
// }
// console.log(run(animals));

/********************function *******************************/

//tên hàm có thể chứa a-z ,A-Z ,0-9 ,_,$
//SỐ KO ĐƯỢC ĐƯA LÊN ĐẦU TIÊN
// function showDialog() {
//   //code
//   alert("hi! xin chao cac ban");
// }
// nằm trong một khối mã
//call() gọi hàm
// showDialog();

// tham số trong function ///

// function writeLog() {
//     console.log('Day la mot dong log');
// }
// writeLog();
// function writeLog(message) {
//     console.log(message);
// }

// writeLog('test message');
// writeLog(123);

//-> ĐỐI SỐ
// KO GIỚI HẠN KIỂU DỮ LIỆU
//có thể dùng kiểu nào cũng đc
// function writeLog(message,message2) {
//     console.log(message);
//     console.log(message2);
// }
// writeLog('test','test2');

// //mỗi function chỉ làm 1 việc
// // writeLog('test');
// // nếu ko truyền giá trị nào thì cả 2 sẽ là undefined

// function writeLog(message,message2) {
//     console.log(message);
//     if(message2)
//     {
//         console.log(message2);
//     }
// }
// writeLog('log 1');
//writeLog('log 1','log 2');

// nếu có message2 thì nó mới in ra message2
// function writeLog()
// {
//     console.log(arguments);
// }
// writeLog('log1','log2');
// function writeLog()
// {
//     for(var param of arguments) {
//     console.log(param);
//     }
// }
// writeLog('log1','log2');
//  param nó sẽ chạy đúng = số phần tử có trong arguments

// function writeLog()
// {
//     var myString='';
//     for(var param of arguments) {
//     myString+=`${param} -`;
//     }
//     console.log(myString);
// }
// writeLog('log1','log2','log3');

// /***************** return trong function ****/
// var isConfirm = confirm('message');
// console.log(isConfirm);
// var needle='hihi';
// var haystack='Hoc JS tai F8!';
// function stringInString(needle,haystack)
// {
//    if(typeof needle == 'string' && haystack.search(needle)>=0)
//    {
//        return true;
//    }
//    else{
//        return false;
//    }
// }
// console.log(stringInString(needle,haystack));

// //Cach 1
// // function stringInString(needle,haystack){
// //       return result = typeof needle === 'string' && haystack.search(needle) >= 0 ? true : false;

// // }
// //Cach 2
// function stringInString(needle,haystack){
//     return typeof needle === 'string' && haystack.includes(needle)  ? true : false;
// }

/**
 * Viết hàm kiểm tra một chuỗi có nằm trong một chuỗi khác hay không. Đặt tên hàm này là stringInString, hàm có hai tham số lần lượt là needle (chuỗi muốn tìm) và haystack (chuỗi gốc, giá trị của needle sẽ được tìm xem có tồn tại trong haystack hay không)

Yêu cầu:

Tạo hàm stringInString theo mô tả trên
Nếu needle được tìm thấy trong haystack hàm 
sẽ trả về trueNếu không tìm thấy needle trong 
haystack hàm sẽ trả về false
Nếu một trong các giá trị đầu vào không phải 
chuỗi hàm sẽ trả về false
 */

/**
 * Viết hàm checkExistIdol để kiểm tra xem có idol
 *  của bạn trong danh sách idols không. Anh em tự
 * quan sát mô tả của testcases mà làm bài nhé :v
 */

//cach 1
// function checkExistIdol(arrayName, Ten) {
//     for (var param of arrayName) {
//         if (param == Ten) {
//             return true;
//         }
//     }
//     return false;
// }
// //var of

//cach 2
/*
function checkExistIdol(idol,Myidol) {
    if(idol.indexOf(Myidol)!=-1)
    {
       return true;
    }
    else{
        return false;
    }
}
*/
//cach 3
/*
function checkExistIdol (idols,idol){
    for(var i=0;i<idols.length;i++){
        if(idols[i]==idol){
            return true;
        }
    }
    return false;
}
*/
/*
cach 4
return names.includes(name) ? true : false;
*/

/*******Object ************/

//object sử dụng khi lưu trữ thông tin
//  đối tượng cụ thể

// để có một key trong objcet = 1 biến !!!

var emailKey = "email";
var myInfo = {
  // key : value
  // dat ki phai theo nguyen tac cua bien
  name: "Chi Cong",
  age: 19,
  address: "Ca Mau, VN",
  [emailKey]: "congz@gmail.com",
  // nếu không có dấu [ ] thì nó sẽ hiểu là emailKey
  //   là một key của chương trình
};

//cach xoaaa key trong object
delete myInfo.age;
delete myInfo.address;

//muốn thêm ki và value sau khi object được tạo

// myInfo.email='conz@gmail.com';
// myInfo['my-email']='conz@gmail.com';
// ->cách để thêm mấy vi phạm trong biên
// string trong mảng

//-> cách để lấy 1 phần tử trong value ra ngoài
// là phải biến key

//cach 1
// console.log(myInfo.name);

// cach 2
//  console.log(myInfo['age']);//-> 19
//  console.log(myInfo['math']);->
//  ko có trong object sẽ ra undefined

//-> đa số sử dụng cách 1
//  console.log(myInfo);

// var mykey='address';
// console.log(myInfo.mykey);

//->undefined vì nó tìm mykey trong object mà ko có
// console.log(myInfo[mykey]);
//-> ra HA NOI ,VN
// ko dùng chuỗi ['mykey']-> vì nó hiểu
//  là mykey trong object

/*********** Object constructor  *************/

// quy ước chung là đặt chữ cái đầu viết hoá

function User(firstName, lastName, avatar) {
  this.firstName = firstName;
  // thuộc tính firstName = với firstName
  //được truyền vào khi khởi tạo đối tượng
  // 2 cái còn lại tương tự
  this.lastName = lastName;
  this.avatar = avatar;

  this.getName = function () {
    return `${this.firstName}${this.lastName}`;
  };
}
//-> 4 this đầu tiên
//  mô tả thuộc tính và phương thức
//có cho đối tượng từ object constructor

// nhưng từ this trong phương thức getName
// gọi từ đối tượng của chúng ta

//-> mô tả thiết kế đối tượng

//đều là đối tượng User
// nhưng 1 cái là giảng viên,1 cái là học viên
var arthor = new User("Chi", "Cong", "Avatar");
//người thiết kế
var user = new User("Phuong", "Thao", "Avatar");
//người sử dụng thiết kế
//-> sử dụng bảng thiết kế ta dùng từ khoá new
//giá trị trả về nó mới là một đối tượng

//String,Array,Date,Number chính là
//Object constructor

//  console.log(arthor.constructor);
//có thể gọi trực tiếp
//   phương thức nằm trong đối tượng
//-> trả ra chính mô tả của bản thiết kế
// console.log(arthor.constructor === User);
//so sánh trực tiếp vs User

//nếu 2 phương thức hoặc thuộc tính
//  không giống nhau thì
// ta sẽ tạo ra  riêng của từng cái

// arthor.title ='Chia sẻ dạo tại F8!';
// user.comment='Giúp em với ạ!';
// console.log(arthor.getName());
//  //-> Tên của object constructor
//  // đã tạo ra đối tượng
//  console.log(user.getName());

//tong hợp bài
/**
 * thuộc tính và phương thức được Đ/N
 * trong bảng thiết kế nên tất cả các
 * đối tượng khởi tạo ra (new)
 * đều có chung thuộc tính và phương thức đó
 */

//cách 2
// var User=function(firstName, lastName, avatar)
// {
//     this.firstName=firstName;
//     // thuộc tính firstName = với firstName
//     //được truyền vào khi khởi tạo đối tượng
//     // 2 cái còn lại tương tự
//     this.lastName=lastName;
//     this.avatar=avatar;

//     this.getName= function() {
//         return `${this.firstName}${this.lastName}`
//     }
// }
// console.log(arthor);
// console.log(user);
//có thể dùng declaration function
// hoặc expression function

//cách này làm chung hợp lí !!
// thay vì
// var arthor = {
// firstName:'',
// lastName:'',
// avatar:''
// };
//ta sẽ dùng cách trên để làm nhanh hơn

/*********** Object prototype  *************/

// prototype giúp ta thêm một
// thuộc tính bên ngoài hàm tạo

function User(firstName, lastName, avatar) {
  this.firstName = firstName;
  // thuộc tính firstName = với firstName
  //được truyền vào khi khởi tạo đối tượng
  // 2 cái còn lại tương tự
  this.lastName = lastName;
  this.avatar = avatar;

  this.getName = function () {
    return `${this.firstName}${this.lastName}`;
  };
}
User.prototype.className = "F8";
console.log(user.className);

//**object Date */

//  var date =Date();
// console.log(date);
//trả về time hiện tại
//nhưng KDL là string

var date = new Date();
// console.log(date);
// nó mang KDL là object
//trả về time hiện tại

// console.log(date.getFullYear());
//trả ra năm của hiện tại

//cách viết số 2
var year = date.getFullYear();
var month = date.getMonth() + 1;
//trả về tháng nhưng từ 0-11 nên ta cộng thêm 1 cho đúng
// console.log(month);
var day = date.getDate();
// console.log(day);

console.log(`${day}/${month}/${year}`);

/** lENH RE NHÁNH Switch */

var date = 9;
// var date='3';
// nếu sử dụng chuỗi '3' thì nó sẽ ko lọt vào switch

//cách trình bày 1
/*
switch(date) {
    case 2:
        console.log('hom nay la thu 2');
        break;
        //thoát khỏi khối lệnh switch
    case 3: // để nó bt Gía trị đúng sử dụng toán tử ===
        console.log('hom nay la thu 3');
        break;
        //nếu nó đúng mà ko có break thì nó sẽ chạy xuống tiếp tục 
        // hết các case còn lại
    case 4:
        console.log('hom nay la thu 4');
        break;
    case 5:
        console.log('hom nay la thu 5');
        break;
}
*/
//cách trình bày 2
switch (date) {
  case 2:
  case 3:
  case 4:
    console.log("hom nay la thu 2, 3, 4");
    break;
  //gia tri 2 3 4 sẽ lọt vào 3 case dau tien
  //do khong co tu khoa break nen no se tiep tuc chay xuong dưới
  case 5:
    console.log("hom nay la thu 5");
    break;
  //nếu không có từ khoá break thì nó sẽ lọt xuống default
  default:
    console.log("Khong Biet");
  //gia tri khac so voi tat ca cai o tren
}
/** Toán tử 3 ngôi */
// ternary operator

// var course = {
//   name: "JavaScript",
//   coin: 250,
// };
//cach 1

// if(course.coin >0)
// {
//  console.log(`${course.coin}Coin`);
// }
// else{
//     console.log('Mien phi');
// }s

//cach 2

// var result = course.coin > 0 ? `${course.coin} Coin` : "Mien phi";
// console.log(result);

/// for of

// var languages=[
//   'Javascript',
//   'PHP',
//   'Ruby'
// ];
//nếu là mảng nó lấy ra từng phần tử của một mảng
// var languages = "Javascript";
// for (var value of languages) {
//   console.log(value);
// }
// nếu là một chuỗi nó tách ra từng chữ cái của một chuỗi

var myInfo = {
  name: "Chi Cong",
  age: 19,
};
// for(var value in myInfo)
// {
//   console.log(value);
// }
// object for of ko sử dụng đc
//-> bị lỗi vì myInfo ko phải là một đối tượng lặp

//cách sử dụng object trong for of

// console.log(Object.keys(myInfo));
//TRẢ VỀ MỘT MẢNG CÁC KEY
//-> ra name va age

//  console.log(Object.values(myInfo));
//trả về một mảng các values
//-> ra Chi Cong va 19

//  for(var value of Object.keys(myInfo))
//  {
//    console.log(value);
//  }
//-> trả về key của đối tượng : name va age

// for(var value of Object.values(myInfo)){
//   console.log(value);
// }
//-> trả về các value : Chi Cong va 19

/*
var i=0;
var isSccess = false;

do{
  i++;

  console.log('Nạp thẻ lần ' + i);
  //thành công
  if(false)
  {
    isSccess=true;
  }
}while(!isSccess && i<=3);
//dù điều kiện sai thì nó sẽ chạy ít nhất 1 lần
*/

// var i=0;
// var isSccess =true;

// do{
//   i++;
//   if(isSccess==false)
//   {
//     console.log('Nạp thẻ thất bại'+i );
//   }
//   else{
//     console.log('nap the thanh cong'+ i);
//   }
// }while(!isSccess &&i<=3);

//VÒNG LẶP LÒNG NHAU -NESTED LOOP

// var myArray = [
//   [1, 2],
//   [3, 4],
//   [5, 6]
// ];

// for(var i=0;i<myArray.length;i++)
// {
//   for(var j=0;j<myArray[i].length;j++)
//   {
//     //<myArray[i].length độ dài từng phần tử của mảng
//   console.log(myArray[i][j]);
//   }
//   // lấy ra các phần tử của mảng con
// }

//ví dụ về lòng lặp

//exmple 1
// for(var i=100;i>0;i--)
// {
//   console.log(i);
//   //chạy lùi
// }
//exmple 2

// for(var i=0;i<=100;i+=5)
// {
//   console.log(i);
// }

//exmple 3

// for(var i=100;i>=0;i-=5)
// {
//   console.log(i);
// }

// LÀM VIỆC VỚI MẢNG PHẦN 2

//MỘT SỐ PHƯƠNG THỨC CỦA Array
/*
  Array Methods:
       forEach()
       every()
       some()
       find()
       filter()
       map()
       reduce()
 */

var courses = [
  {
    id: 1,
    name: "Javascript",
    coin: 250,
  },
  {
    id: 2,
    name: "HTML, CSS",
    coin: 0,
  },
  {
    id: 3,
    name: "Ruby",
    coin: 0,
  },
  {
    id: 4,
    name: "PHP",
    coin: 400,
  },
  {
    id: 5,
    name: "ReactJS",
    coin: 500,
  },
  {
    id: 6,
    name: "Ruby",
    coin: 1,
  },
];

//cách 1
// for(var i=0;i<courses.length;i++)
// {
//   console.log(courses[i]);
// }

//cách 2

//hàm truyền dưới dạng tham số là call back
/*
courses.forEach(function(course, index)
 {
  console.log(index, course);
  //in ra từng phần tử của mảng 
});

*/
//  forEach() -> dùng để duyệt qua từng phần tử của mảng

//every() -> kiểm tra tất cả có cái j chung hay không
//-> nó trả về boolean true || false
var isFree = courses.every(function (course, index) {
  console.log(index);
  //-> nếu đúng thì chạy tiếp đến khi sau dừng lại
  return course.coin === 0;
  //kiểm tra từng phần tử phần tử nào false là nó dừng luôn
});
console.log(isFree);

//some() -> chỉ cần 1 ông thoả mãn điều kiện là được chạy

var exam = courses.some(function (course, index) {
  return course.coin === 0;
});
console.log(exam);

//kiểm tra chỉ cần 1 phần tử thoả mản điều kiện thì
// tất cả đều đúng

//find()

//-> tìm kiếm 1 phần tử trong mảng có trả về kết quả
// ko trả về NULL(undefined)
var course = courses.find(function (course, index) {
  return course.name === "Ruby   ";
});
console.log(course);
//-> nếu có 2 giá trị giống nhau
//hàm find() chỉ trả về giá trị đầu tiên nó gặp được
//exmple
// có 2 Ruby thì chỉ trả về Ruby đầu tiên gặp được

var listCourse = courses.filter(function (course, index) {
  return course.name === "Ruby";
});
console.log(listCourse);

// ngược lại vs find() là nó trả
// về tất cả phần tử thoả mãn
//như phần tử 1 và phần tử 6

//bài tập 1

/*
function getRequestBodyFromValues(formValues) {

    obS={};
    formValues.forEach(function (item)
    {
        obS[item.field]=item.value;
    });
    return obS;
}

function getRequestBodyFromValues(formValues) {
  // C1:
  // let result = {};
  // for(let accumulator of formValues){
  // result[accumulator.field] = accumulator.value
  // }
  // return result;

  // C2:
  // let result = {};
  // formValues.forEach((accumulater) 
  => result[accumulater.field] = accumulater.value)
  // return result;

  //C3:
  //   let result = {};
  //   formValues.map((accumulater) => {
  //      result[accumulater.field] = accumulater.value
  //   })
  //  return result;

  //C4:
  let result = {}
  formValues.filter((obj) => {
    result[obj.field] = obj.value;
  })
  return result;
}
*/

// var number = [
//   1,
//   2,
//   3
// ];
// var input=[1,2,3];
// var testCase=function checkPositiveNumbers(number) {

//     number.every(function (course)
//    {
//        return course.input <= 0 ;
//    });

// }
// console.log(testCase);

// bài tập 2
/*
var numbers=[
  -1,
  2,
  3
];
function checkPositiveNumbers(numbers) {

    return numbers.every(function (course)
   {
       return  course > 0;
   });

}
console.log(checkPositiveNumbers(numbers));

//cach 2

function checkPositiveNumbers(numbers) {

    var check= numbers.every(function (course)
   {
       return  course > 0;
   });
   check?true:false;
   return check;

}
*/
/*
var monsters=[
    {
        name: 'Cá heo',
        attack: 50,
        speed: 100,
        hitpoint: 100
    },
    {
        name: 'Khủng long',
        attack: 140,
        speed: 80,
        hitpoint: 180
    }

];
function findAMonsterByAttack(monsters) {
    var items= monsters.find(function(check)
    {
        return check.attack===150;
    });
    return items;    
}
console.log(findAMonsterByAttack(monsters));
*/

/*
var strings=['hi', 'abc', 'chuỗi', '123'];
var keyword='hi';
//cach 1
function findStringsInArrayByKeyword(keyword, strings) {

    return strings.filter(function(string, index) {
        return string.indexOf(keyword) != -1;
    })

}

//cach 2
function findStringsInArrayByKeyword(keyword, strings) {
    var language = []
    var j = 0;
    for(var key of strings) {
        if(key.indexOf(keyword) != -1) {
            language[j] = key
            j++
        }
    }

    return language

}
//cach 3
function findStringsInArrayByKeyword(keyword, strings) {

    var result = strings.filter(function(item){
        return item.indexOf(keyword) != -1
        });
        return result != undefined ?result : [];

}

// /cach 4
function findStringsInArrayByKeyword(keyword, strings) {
    var listStrings = strings.filter(function(string) {
        return string.search(keyword) >= 0;
    })
    return listStrings;
}

//cach 5

 return strings.filter(function(item){
        return item.indexOf(keyword)>=0;
    }) ;
    */
var array1 = [1, 2, 6, 8];
var array2 = [2, 6];
//cách 1
function findEqualValues (array1 ,array2) {
    var output=[];
    for( var index of array1){
        array2.forEach(function(array){
            if(index===array){
                output.push(index);
            }
        });
    }
    return output;
}
console.log(findEqualValues (array1 ,array2));

//cách 2
/*
function findEqualValues (array1 ,array2) {
    var output=[];
    for( var index of array1){
        array2.forEach(function(array){
            if(index===array){
                output.push(index);
            }
        });
    }
    return output;
}
*/

//cách 3
/*
function findEqualValues(array1, array2) {
    var ar3 = (array1.concat(array2));
    var temp = (ar3.filter(function (value, index) {
        return ar3.indexOf(value) != index;
    }));
    return temp;
}
console.log(findEqualValues(array1,array2));
*/
