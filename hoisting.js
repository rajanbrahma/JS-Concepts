var name = 'rajan';
console.log(name); // It will print the name as it is

console.log(value);
var value = 'rajan'; // It will print undefined, as "var value" - only declaration got hoisted to the top.
//var value; //hoisted
//console.log(value)
//value = 'rajan'

//------------------

console.log("Rajan Data Const : ",data);// error - "let myName2 " cannot be hoisted first. As it's let - we cannot move let to the top.
const data = 'rajan data';

//------------------

let myName = 'rox'
console.log(myName);

console.log(myName2); // error - "let myName2 " cannot be hoisted first. As it's let - we cannot move let to the top.
let myName2 = 'rox2'

//------------------

function sayName(){
    console.log("Hello there!");
}
sayName(); //Normally works

sayName2(); // It will still work, as hoisting moves any kind of declarations to the top - be it a variable declaration or a function declaration.
function sayName2(){
    console.log("Hello there SayName 2 !!!");
}

//----------------------------

var getAge = function(){
    console.log("My Age is 25!!");
}
getAge();

getAge2(); // Error - getAge2 is not a function - as declaration of "getAge2" got hoisted.
var getAge2 = function(){
    console.log("My Age is 25!! - getAge2 ");
}

//var getAge2;
//getAge2();
//getAge2 = function(){
//    console.log("My Age is 25!! - getAge2 ");
//}