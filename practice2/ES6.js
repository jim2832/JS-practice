// 變數的宣告
// var: function scope (ES5) -> 只會在 function 內有效
// let, const: block scope (ES6) -> 只會在 {} 內有效

// var
function sayHello() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log(i);
}
console.log(i); // error (var 只會在 function 內有效)

// ----------------------------------------------

// let
function sayHello2() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log(i);
}
console.log(i); // error (let 只會在 {} 內有效)

// ----------------------------------------------

// const
const x = 1;
x = 2; // error (const 不可變更)
console.log(x);
// Object -> 如果用const宣告，則物件內的屬性可以變更，但是物件本身不可變更
const person = {
    name: 'Mosh',
    walk() {},
    talk() {}
};
person.talk();

// ----------------------------------------------

// 解構賦值 -> 用來從物件或陣列中取出資料變成獨立的變數
const address = ['台北市', '台灣', '123'];
const [city, country, zip] = address; // 用 [] 來解構陣列
console.log(city); // output: 台北市

// 物件解構
const address2 = {
    city2: '台北市',
    country2: '台灣',
    zip2: '123'
};
const { city2, country2, zip2 } = address2; // 用 {} 來解構物件
console.log(city2); // output: 台北市

// ----------------------------------------------

// iterator -> 用來遍歷物件或陣列
var my_stirng = 'Hello';
var my_array = ['a', 'b', 'c', 'd'];
var iterator = my_stirng[Symbol.iterator]();
// iterator.next() -> 用來取得下一個值
console.log(iterator.next()); // output: {value: "H", done: false}
console.log(iterator.next()); // output: {value: "e", done: false}
console.log(iterator.next()); // output: {value: "l", done: false}
console.log(iterator.next()); // output: {value: "l", done: false}
console.log(iterator.next()); // output: {value: "o", done: false}
console.log(iterator.next()); // output: {value: undefined, done: true}

// array iterator
var iterator2 = my_array[Symbol.iterator]();
console.log(iterator2.next()); // output: {value: "a", done: false}
console.log(iterator2.next()); // output: {value: "b", done: false}
// ...

// ----------------------------------------------

// for...of -> 用來遍歷物件或陣列
var my_stirng2 = 'Hello';
var my_array2 = ['a', 'b', 'c', 'd'];
var object = {
    name: 'Mosh',
    age: 30
};
for (let char of my_stirng2) {
    console.log(char);
}
for (let char of my_array2) {
    console.log(char);
}
for (let key of Object.keys(object)) {
    console.log(key);
}

// ----------------------------------------------

// for...in -> 用來遍歷物件的屬性
var my_stirng3 = 'Hello';
var my_array3 = ['a', 'b', 'c', 'd'];
for (let index in my_stirng3) {
    console.log(index);
}
for (let index in my_array3) {
    console.log(index);
}

// for...in -> 用來遍歷物件的屬性
var Object1 = {
    name: 'Mosh',
    age: 30
};
for (let key in Object1) {
    console.log(key);
}

// ----------------------------------------------

// template literals -> 用來組合字串
// ES5
var message = 'This is my\n' + "'first' message"; // \n -> 換行
// ES6
var another = `This is my
'first' message`; // `` -> 換行

// 嵌入變數
var name = 'Mosh';
var message2 = `Hi ${name}
This is my 'first' message`;

// ----------------------------------------------

// spread operator -> 用來展開陣列
const first = [1, 2, 3];
const second = [4, 5, 6];
// ES5
const combined = first.concat(second);
// ES6
const combined2 = [...first, 'a', ...second, 'b']; // 用...展開陣列
// clone
const clone = [...first];

// ----------------------------------------------

// arrow function -> 簡化 function 的寫法
// ES5
const square = function(number) {
    return number * number;
};
// ES6
const square2 = number => number * number; // 只有一個參數時，可以省略()
const square3 = (number, number2) => number * number2; // 有多個參數時，不可省略()

// ----------------------------------------------