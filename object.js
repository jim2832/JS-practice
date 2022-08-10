//物件 object
//key and value

//創建物件(由key跟value組成)(也可以包括函式)
var person = {
    name:"Jim",
    age:30,
    is_male:true,
    //可以在裡面創建函式
    print_name:function(){
        document.write(this.name);
    }
}

document.write(person.name);//取得物件的屬性
document.write("<br>")
document.write(person.age);
document.write("<br>")
person.print_name()

//js中所有東西都可以視為物件
var phrase = "hello"
document.write(phrase.length) //物件phrase的length屬性