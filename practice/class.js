//class類別

//宣告物件
class Phone{
    constructor(number, year, is_waterproof){
        this.number = number;
        this.year = year;
        this.is_waterproof = is_waterproof;
    }
    phone_age(){
        return 2022 - this.year;
    }
}

//創建物件
var phone1 = new Phone("321", 2019, true);
var phone2 = new Phone("654", 2017, false);
document.write(phone1.number);
document.write("<br>");
document.write(phone1.phone_age());
document.write("<br>");
document.write(phone2.number);
document.write("<br>");
document.write(phone2.phone_age());