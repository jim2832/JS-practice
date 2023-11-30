//函式 function

//定義函式
function print_Hello(name, age){
    document.write("Hello, " + name + ", 你今年" + age + "歲");    
    document.write("<br/>")
}

//呼叫函式
print_Hello("Canyon","25");

//相加函式
function add(num1, num2){
    var result = num1 + num2;
    return result;
}
document.write(add(13, 50));