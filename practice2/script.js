// console.log("Hello World!");

// 變數宣告(var, let, const)
let name = "Jim";
let age = 18;
name += age;
console.log(name);

// prompt(詢問訊息) and alert(跳出訊息)
h = prompt("What is your height?");
w = prompt("What is your weight?");
// console.log(h, w);
alert("Your BMI is " + w / (h / 100) ** 2);