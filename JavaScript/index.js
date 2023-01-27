/* @class
 * loop in JS: array, object
 * MyForeach, MyMap, MyFilter, MyReduce

 * destructure
 * rest parameter vs. spread operator
 *
 * object copy
 */

// //* destructure

// // const a = 0;
// // const b = 'hello';
// const [a, b] = [ 0, 'hello' ];
// const {key1: key, key2: hello} = {
//   key1: 'TT',
//   key2: 12
// };
// console.log(hello);

//* rest parameter vs. spread operator

// function foo(...args) {
//   console.log(args);
//   // for (let i = 0; i < arguments.length; i++) {
//   //   console.log(arguments[i]);
//   // }
// }
// foo('hello', 2, true, 1, 2, 3, 3, true, {}, []);

// const arr = [1, 2, 3];
// const arr1 = [4, ...arr, 5, ...arr]; // [4, 1, 2, 3]

// // let obj = {
// //   name: 'TT',
// //   age: 12,
// // };
// // const obj1 = {
// //   ...obj,
// // }
// //* mutable vs. immutable
// // let arr = [1, 2, 3];
// // arr = [arr[0], 56, arr[2]];
// // console.log(arr);
// // obj = {
// //   ...obj,
// //   salary: 10000,
// // };
// obj.salary = 10000;

// //* * object copy: shallow copy, deep copy
const obj = {
  name: 'TT',
  age: 56,
  arr: [
    {name: 'DD', age: 45}
  ], 
}
// // const obj2 = obj;
// const obj3 = {...obj};

// obj.arr[0].name = 'UU';
// console.log(obj3.arr[0].name);

//* deep: 
//* JSON.parse && JSON.stringify
//* structuredClone()
//* Lodash | _.cloneDeep() Method

console.log(JSON.stringify(obj))
const obj4 = JSON.parse(JSON.stringify(obj));
console.log(obj, obj4);


// const obj5 = structuredClone(obj);
// console.log(obj5);
//* loop in JS: array, object


// const arr = [1, 2, 3];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === 2) {
//     // continue;
//     break;
//   }
//   console.log(arr[i]);
// } // 1

// const obj = {
//   name: 'TT',
//   age: 34
// };

// for (let ele of arr) {
//   console.log(ele);
// }
// for (let i of arr) {
//   console.log(arr[i]);
// }



// Array.prototype.myForEach = function(fn) {
//   for (let i = 0; i < this.length; i++) {
//     fn(this[i], i, this);
//   }
// }

// Array.prototype.myMap = function(fn) {
//   const arr = [];
//   for (let i = 0; i < this.length; i++) {
//     arr.push(fn(this[i], i, this));
//   }
//   return arr;
// }

// const arr = [34, 21, 153];

// Array.prototype.myFilter = function (fn) {
//   const arr = [];
//   for (let i = 0; i < this.length; i++) {
//     if (fn(this[i], i, this)) {
//       arr.push(this[i]);
//     }
//   }
//   return arr;
// }

// console.log(arr.myFilter(function (cur, i, curarray) {
//   // curarray[i] = cur + 100;
//   return cur > 100;
// })); // [34, 53]

// console.log(arr.myMap(function(cur, i, curarray) {
//   // curarray[i] = cur + 100;
//   return cur + 300
// })); //

// arr.myForEach(function(cur, i, curarray) {
//   curarray[i] = cur + 100;
// }); //

// console.log(arr); // 35, 22, 54;

//* myReduce */

// Array.prototype.myReduce = function () {

// }
// const str = 'abc';
// const strarr = [...str];
// // console.log(strarr);
// console.log([...str].reduce((acc, cur) => acc + cur + cur)); // 'aabbcc';
//a' + b + b = aabb + c + c = aabbcc

// const arr = [1, 2, 3];
// console.log(arr.reduce((acc, cur) => {
//   return acc + cur //1, 3, 6
// }, 0));

// function foo(arr) {
//   return arr.reduce((obj, ele) => {
//     return {
//       ...obj,
//       [ele.name]: ele.age
//     }
//   }, {});

//   // return arr.reduce((obj, ele) => {
//   //   obj[ele.name] = ele.age;
//   //   return obj;
//   // }, {});

//   // const obj = {};
//   // for (let ele of arr) {
//   //   obj[ele.name] = ele.age;
//   // }
//   // return obj;
// }
// const arr = [
//   {name: 'RR', age: 34}, 
//   {name: 'TT', age: 23}, 
//   {name: 'YY', age: 12}, 
//   {name: 'DD', age: 12}, 
// ];

// console.log(foo(arr));
// /* {
//   RR: 34,
//   TT: 23, 
//   YY: 12
// } */

// const numbers = [175, 50, 25];

// const res = numbers.reduce((acc, cur) =>  {
//   console.log('^ ^')
//   return acc - cur;
// }, 0);
// console.log(res);

// const obj = {
//   name: 'TT',
//   age: 56
// }

// Object.keys(obj).filter
// Object.values(obj).filter
// Object.entries(obj).forEach(([key, val], i, curarray) => {
//   console.log('key', key, 'value', val);
// });
// console.log(Object.entries(obj));
