function foodDelivery(input){

    let priceChikenMenu = 10.35;
    let priceFishMenu = 12.40;
    let priceVeganMenu = 8.15;
    let delivery = 2.50;

    let numberChiken = Number(input[0]);
    let numberFish = Number(input[1]);
    let numberVegan = Number(input[2]);

    let sumChiken = priceChikenMenu*numberChiken;
    let sumFish = priceFishMenu*numberFish;
    let sumVegan = priceVeganMenu*numberVegan;
    let sumFood = sumChiken+sumFish+sumVegan;
    let deserts = sumFood*0.2;
    let sumAllFood = sumFood+deserts;
    let sum = sumAllFood+delivery;
    console.log(sum);
}

foodDelivery(["2" , "4" , "3"])