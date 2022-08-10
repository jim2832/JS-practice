//字串及其用法

//字串相加
var phrase = "Hello \"World\" " + "first try ";
var text = "second try ";
document.write(phrase + text);
document.write("<br>");

//字串長度
document.write(phrase.length);
document.write("<br>");

//轉大寫
document.write(phrase.toUpperCase());
document.write("<br>");

//轉小寫
document.write(phrase.toLowerCase());
document.write("<br>");

//回傳字串的第n位
document.write(phrase.charAt(0));
document.write("<br>");

//回傳某個字元的index
document.write(phrase.indexOf("f"));
document.write("<br>");

//回傳index範圍內的子字串
document.write(phrase.substring(0,5)); //回傳Hello
document.write("<br>");