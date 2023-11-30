//取得html元素

//window全域物件
window.document.write("test");

var a = 123;
window.document.write(window.a);

//取得元素
var h1 = document.getElementById("header1");
//在console中印出來
console.log(h1);

//更改標籤的內容
h1.innerText = "更改後的標題";
h1.style.backgroundColor = "blue";
h1.style.color = "white";

//取得元素
var link = document.getElementById("link");
console.log(link);

//更改標籤的內容
link.href = "https://amazon.com";