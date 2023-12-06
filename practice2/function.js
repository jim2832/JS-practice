// 第一種宣告方式(可以在宣告前就使用)
function Hello(){
    console.log("Hello World");
}

// 第二種宣告方式(不能在宣告前就使用)
var Hello = function(){
    console.log("Hello World");
}

// --------------------------------------------------------------------

// 把 function 當作參數來傳遞(callback function)
function heyFunc(myFuction){
    myFuction("Hi");
}
heyFunc(console.log)

// --------------------------------------------------------------------

// anonymous function (匿名函式) -> 只能在 callback function 用
heyFunc(function(message){
    console.log("Message is: ", message)
})

// --------------------------------------------------------------------

// 立即函式 Immediately Invoked Functions Expressions (IIFE)
var sayHi = function(name){
    console.log("Hello, " + name + " !")
}("Peter") //在最後面直接傳入參數

// 如果不宣告函式名稱，則需要用括號包住
(function(name){
    console.log("Hello, " + name + " !")
})("Peter") //在最後面直接傳入參數

// --------------------------------------------------------------------

// 變數提升特性(hoisting)
// 宣告 var 的時候，宣告會被提前至函式作用域的開頭，這個特性又稱為 hoisting
console.log(x); //一般來說會跳錯誤訊息，但這邊會印出undefined
var x = 10;
console.log(x);