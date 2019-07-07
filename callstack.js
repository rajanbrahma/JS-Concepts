function sayHowRU(){
    console.log("How r u?");// Stack -> main,greet,sayHello,sayHowRU,console.log //// Stack -> main,greet,sayHi,sayHowRU,consoole.log
}
function sayHello(){
    console.log("Hello!");// Stack -> main,greet,sayHello,console.log
    sayHowRU();// Stack -> main,greet,sayHello,sayHowRU //// Stack -> main,greet,sayHello
}
function sayHi(){
    console.log("Hi!");// Stack -> main,greet,sayHi,console.log
    sayHowRU();// Stack -> main,greet,sayHi,sayHowRU //// Stack -> main,greet,sayHi
}
function greet(){
    sayHello();// Stack -> main,greet,sayHello //// Stack -> main,greet
    sayHi();// Stack -> main,greet,sayHi //// Stack -> main,greet
}

greet(); // Stack -> main,greet, //// Stack -> main
console.log("Greetings!");// Stack -> main,console.log

// Stack -> NULL

