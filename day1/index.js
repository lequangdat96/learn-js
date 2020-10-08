// Khai báo biến

// comparing declare in js

// [var - let] - const  ???

// garbage collection -- bot clean

// Kiểu dữ liệu - data-type
const string1 = "1"; // string
const number = 1.312312; // number
const undefined1 = undefined; // undefined
const _null = null; // null
const array1 = []; // array [1, 2,3 ,4, 5,6] index: 0 - // array like object
const object1 = {
  // name: value // value: any data_type
  name: "dong dong",
  age: 20,
};
// object1.name
const isNotANumber = isNaN;

// do -while - if else -> switch case >>>

// method

//eg: typeof() -> function viết sẵn

// console.log(typeof(object1))

// method number :

const _mNumber = 3.5;

console.log(Math.ceil(_mNumber));
console.log(Math.round(_mNumber));

// method : string

const _mString = "tHetHaoHetHetHetHetHetHetHet";

console.log(_mString.toLocaleLowerCase());
console.log(_mString.toLocaleUpperCase());
console.log(_mString.split(","));
console.log(_mString.split(""));
// console.log(_mString.replace('Het', 'truong'))

const _mName = "truong"; // [t,r,u,o,n,g]

console.log(_mName.replace("uong", "ung").toUpperCase().slice(1, 2));
// commenting

// method array

const listStudents = ["truong", "dat", "chung", "duy"];
// for Each

// for let i = 0 ; i < listStudents.length; i++
// listStudents[i] 0 > n listStudents[0] listStudents[1] listStudents[2]

// element ~~ listStudents[i]

// listStudents.forEach((element) => {
// 	console.log(element)
// })
// ---
// listStudents.map((element)=> {
//  	console.log(element)
//  })
// ---
// for(let i = 0; i< listStudents.length; i++) { // 0 -> length
// 	console.log(listStudents[i])
// }

// method of object

const listObject = [
	{name: 'truong', age: 20},
	{name: 'truong2', age: 220},
	{name: 'truong3', age: 25550},
]

// for(i = 0; i< 10; i++) { // 0 -> length
// 	console.log(i)
// }

// console.log(i)

console.log(age1)
var age1;
// hosting 
