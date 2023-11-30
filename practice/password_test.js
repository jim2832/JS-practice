//密碼檢驗程式

var password = 123456;
var input;
var count = 0;
var limit = 3;
var out_of_limit = false;

while(input != password && !out_of_limit){
    count++;
    if(count <= limit){
        input = prompt("請輸入密碼");
    }
    else{
        out_of_limit = true;
    }
}

if(!out_of_limit){
    alert("登入成功");//網頁提示訊息
}
else{
    alert("超過嘗試次數！");
}