// const a = function(x) {
//     this.x = x;
// }

// a.prototype = {
//     getX() {
//         console.log(this.x);
//         return this.x;
//     }
// };

// const b = function(x, y) {
//     this.y = y;
//     a.call(this, x);

//     this.getY = () => {
//         console.log(this.y);
//         return this.y;
//     }
// }

// const newB = new b('x', 'y');

// newB.getX();
// newB.getY();


// const a = [1, 2, 5, 7, 9];
// const b = [2, 5, 7, 12, 100];
// const c = a.concat(b);

// console.log(c)
// console.log(c.sort((a, b) => a < b))

// const obj = {
//     x: 1,
//     getX() {
//         const inner = function() {
//             console.log(this.x);
//         }
//         inner();
//     }
// };

// obj.getX();

// function sayHi() {
//     alert(this);
// }

// sayHi();

// let user = {}; // user has no address

// console.log( user?.address?.street );

// console.log(Symbol('id'))

// let str = "stringify";
// console.log(str.slice(-4, -1))

// console.log(String.fromCodePoint(90))

// let fruits = [];
// fruits[123] = "Apple";
// console.log(fruits);
// fruits.length = 0;
// console.log(fruits);

// let promise = Promise.resolve();
// promise.then(() => alert("promise done!"));
// alert("code finished");

// setTimeout(() => {
//     console.log('hello from setTimeout')
// }, 0);
// let p = new Promise((res, rej) => {
//     res('hello from Promise')
// });
// let p2 = new Promise((res, rej) => {
//     res('hello from Promise 2')
// });
// p2.then(console.log);
// console.log('hello from outside')
// p.then(console.log);

// const { sayHi, sayBye } = require('./hello');
// sayHi('lul');
// sayBye('lul');

// lexical environment
// function a() {
//     function b() {
//         function c() {
//             function d() {
//                 console.log('from lexical', _b);
//             }
//             d();
//         }
//         c();
//     }
//     b();
// }
// let _b = 20;
// a();

// destructuring
// assign variables from object
// let obj = { x: 1.2, y: 2.5, z: 5 }
// let { x: a, y: b, z: c } = obj;
// console.log(a, b, c);
// assign variables from nested object
// assign variables from array
// let arr = [1, 2, 3, 4, 5, 6]
// let [a, b, ...rest] = arr;
// console.log(a, b, rest);

// let a = 10;
// var b = 100;
// console.log(global.b);

// function x(){
// for(var i=1;i<=5;i++){
// 	function y(a){
// 		setTimeout(function(){
// 		console.log(a)
// 		}, a*1000);
// 	}
// 	y(i);
// }
// }
// x();

// function counter(){
//   var count = 0,cunt=8;
  
//   this.increase = function(){
//     count++;
//     console.log(count);
//   };
  
//   this.decrease = function(){
//     count--;
//     console.log(count);
//   };
  
// }

// let counter1 = new counter();
// counter1.increase()
// counter1.increase()
// counter1.decrease()