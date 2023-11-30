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
document.write("<br>")

//物件練習
var movie = {
    title:"蜘蛛人3",
    producer:"Adam",
    duration:"114",
    actor:[
        //在物件中再創造物件
        {
            name:"Tobey Maguire",
            age:36,
            is_male:true
        },
        {
            name:"Leon",
            age:20,
            is_male:true
        }
    ]
}

document.write(movie.title);
document.write("<br>")
document.write(movie.actor[0].name); //movie物件中的陣列
document.write("<br>")