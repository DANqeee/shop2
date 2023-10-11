class products{
    constructor(kcategory, title, rating, price){
        this.kcategory = kcategory;
        this.title = title;
        this.rating = rating;
        this.price = price;
    }
}

var Apple_iPhone_14_Pro = new products("Smartphones","iPhone 14 Pro","5","1,200")
var Protection_Case_for_Samsung_Galaxy_S22 = new products("Smartphones","Protection Case for Samsung Galaxy S22","5","18")
var Xiaomi_Redmi_Buds3 = new products("ds","Headphones, True Wireless Xiaomi Redmi Buds 3 Lite","5","20")
var Cable_Mcdodo_CA = new products("Smartphones","Data Cable, Mcdodo CA-7430 Nest Series Full Compatible","5","12")


let products2 = [Apple_iPhone_14_Pro,Protection_Case_for_Samsung_Galaxy_S22,Xiaomi_Redmi_Buds3,Cable_Mcdodo_CA];
function yes(item,i){
    console.log(item,i)
    console.log('Nise')
}
var  user_input = "";
function checkForm(el){
    user_input = el.search.value;
   products2.forEach(function (item,i){
        if(user_input === item['kcategory']){
            yes(item,i);
        }
        else if (user_input === item['title']){
            yes(item,i);
        }
        else if (user_input === item['rating']){
            yes(item,i);
        }
        else if (user_input === item['price']){
            yes(item,i);
        }

    })


    return false;
}
