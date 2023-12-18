var array = [1, 2, 3, 4, 5];

// map
array = array.map(function(element){
    return element + 1; // 將陣列中的每個元素都加1
});

// map + arrow function
array = array.map(element => element ** 2); // 將陣列中的每個元素都平方
console.log(array);

// filter
array = array.filter(function(element){
    return element > 10; // 將陣列中大於10的元素取出
});