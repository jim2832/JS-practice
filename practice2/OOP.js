// 物件 (Object)
var person = {
    name: "John",
    age: 18,
    height: 180,
    weight: 80,
    bmi: function(){
        return this.weight / (this.height / 100) ** 2;
    }
}

console.log(person["age"]); // 印出物件的屬性
console.log(person.bmi()); // 呼叫物件的方法

// 增加物件的屬性 (方法1)
person.interestedIn = ["basketball", "soccer"];

// 增加物件的屬性 (方法2)
person["favoriteFood"] = "pizza";