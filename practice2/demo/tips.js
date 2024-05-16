let price = parseInt(prompt("How much is the product?"));
let tips = parseInt(prompt("How much is the tips?")) / 100;
let pay = price * (1 + tips);
console.log("The tips is " + tips * 100 + "%.");
console.log("You need to pay " + pay + " dollars.");
// alert("You need to pay " + pay + " dollars.");