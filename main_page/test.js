
class products{
    constructor(kcategory, title, rating, price){
        this.kcategory = kcategory;
        this.title = title;
        this.rating = rating;
        this.price = price;
    }
}

var Apple_iPhone_14_Pro = new products("Smartphones","iPhone 14 Pro","5","1,200")
var SONY_SRSXV900 = new products("TVAudio","SONY SRSXV900, Wireless Party Speaker, MEGA BASS","5","1,200")
var Headphones_Noise_cancelling = new products("TVAudio","Headphones, Noise cancelling, Bluetooth 5.0","5","920.00")
var Phone_Nokia_8210 = new products("Smartphones","Mobile Phone Nokia 8210, Dual SIM, 4G","5","60")
var D_SLR_Canon_EOS_R10 = new products("PhotoVideo","D-SLR Canon EOS R10, 4k, DIGIC X, RF-S 18-45mm","5","1,100.00")
var PC_DELL_Vostro = new products("LaptopsPCs","PC DELL Vostro 3910 MT, (Intel® Core™ i5-12400)","5","600.00")
var Laptop_2in1_Asus = new products("LaptopsPCs","Laptop 2in1 Asus VivoBook S 14 Flip TP3402ZA Intel® Core™","5","1,000")

var Sony_SRS_XP700 = new products("TVAudio","Sony SRS-XP700, MEGA BASS, Bluetooth, LDAC, Wireless, IPX4","5","600")
var Laptop_HP_250_G9 = new products("LaptopsPCs","Laptop HP 250 G9, Procesor Intel® Core™ i5-1235U","5","490")
var Canon_EF_S = new products("PhotoVideo","Canon EF-S 18-135mm f/3.5-5.6 IS USM Nano","5","510")


let products2 = [Apple_iPhone_14_Pro,D_SLR_Canon_EOS_R10,PC_DELL_Vostro,Laptop_2in1_Asus,Sony_SRS_XP700,Laptop_HP_250_G9,Canon_EF_S,Phone_Nokia_8210];
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
    var product = '';
   function product_none(){
       product = document.querySelectorAll(".TVAudio,.Smartphones ,.PhotoVideo,.LaptopsPCs");
       for (let i = 0; i < product.length ; i += 1)
           product[i].classList.add('None');
   }
if (user_input === "TVAudio"){
    product_none();
    product = document.querySelectorAll(".TVAudio");
    for (let i = 0; i < product.length ; i += 1)
        product[i].classList.remove('None');
    return false;
}
else if (user_input === "Smartphones"){
    product_none();
    product = document.querySelectorAll(".Smartphones");
    for (let i = 0; i < product.length ; i += 1)
        product[i].classList.remove('None');
}
else if (user_input === "PhotoVideo"){
    product_none();
    product = document.querySelectorAll(".PhotoVideo");
    for (let i = 0; i < product.length ; i += 1)
        product[i].classList.remove('None');
}
else if (user_input === "LaptopsPCs"){
    product_none();
    product = document.querySelectorAll(".LaptopsPCs");
    for (let i = 0; i < product.length ; i += 1)
        product[i].classList.remove('None');
}
else if (user_input === ""){
        product = document.querySelectorAll(".TVAudio,.Smartphones ,.PhotoVideo,.LaptopsPCs");
    for (let i = 0; i < product.length ; i += 1)
        product[i].classList.remove('None');
}
else {
    console.log("sory");
}

    return false;
}

