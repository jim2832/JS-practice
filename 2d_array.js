//二維陣列、巢狀迴圈

//2d array
var number = [
    [1, 2, 3],
    [2, 5, 10],
    [4, 7, 1]
];

for(var i=0; i<number.length; i++){
    for(var j=0; j<number[i].length; j++){
        document.write(number[i][j]);
        document.write("<br/>");
    }
}