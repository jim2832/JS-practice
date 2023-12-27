var array = [1, 2, 3, 4, 5];
console.log(array);

// 增加陣列的元素 (push)
var array2 = new Array(1, 2, 3, 4, 5);
array2.push(6);
console.log(array2);

// 刪除陣列的元素 (pop)
array2.pop();
console.log(array2);

// 字串陣列
var array3 = ["John", "Mary", "Tom"];

// 陣列的長度
console.log(array3.length);

// 取得某個元素的索引
console.log(array3.indexOf("Mary"));

// slice (不包括結束索引)
console.log(array3.slice(0, 2));

// 陣列的迭代
for (var i = 0; i < array3.length; i++) {
    console.log(array3[i]);
}

// forEach
array3.forEach(function (element) {
    console.log(element);
});

// find (找到第一個符合條件的元素)
let result = array3.find(function (element) {
    return element === "Mary";
});
console.log(result);

// prototype (在原型上新增方法)
Array.prototype.sayHello = function () {
    console.log("Hello");
}

// reduce (將陣列中的元素累加)
let sum = array.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
});