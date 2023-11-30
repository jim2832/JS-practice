//if判斷式

var hungry = true;
var rainy = false;

//if else判斷式
if(hungry){
    document.write("去吃飯");
}
else{
    document.write("不吃飯");
}

document.write("<br>");

//else if
if(hungry && rainy){
    document.write("在家吃飯");
}
else if(hungry && !rainy){
    document.write("在外面吃飯");
}
else if(!hungry && rainy){
    document.write("在家裡不吃飯");
}
else{
    document.write("在外面不吃飯");
}

document.write("<br>");

// and or
if(hungry && rainy){
    document.write("很餓且外面下雨");
}
if(hungry || rainy){
    document.write("很餓或外面下雨");
}

document.write("<br>");

//找最大值的函式
var numbers = [10, 6, 53, 100, 21, 64];

function max_num(arr){
    var max = 0;
    for(var i=0; i<arr.length; i++){
        if(max < arr[i]){
            max = arr[i];
        }
    }
    return max;
}

document.write(max_num(numbers));