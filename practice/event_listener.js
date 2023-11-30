//event listener

/*
function handle_click(element){
    alert("按按鈕");
    element.innerText = "新的按鈕文字";
    element.style.color = "red";
}
*/

//透過js來監聽
var btn = document.getElementById("btn");
btn.addEventListener("click", function(){ //新增監聽元素
    alert("提示字元");
    this.innerText = "新的字元";
    this.style.color = "green";
})

var img = document.getElementById("img");
img.addEventListener("mouseover", function(){
    this.src = "foot.jpg";
})
img.addEventListener("mouseout", function(){
    this.src = "roger.jpg";
})