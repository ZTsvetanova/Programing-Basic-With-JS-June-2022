function yardGreening(input){

    let meters = Number(input[0]);
    let priceMeters = 7.61;
    let percentageDiscount = 0.18; // 18%

    let priceWithoutDiscount = priceMeters*meters;
    let discount = priceWithoutDiscount*percentageDiscount;
    let price = priceWithoutDiscount - discount;
    console.log(`The final price is : ${price} lv.`);
    console.log(`The discount is : ${discount} lv.`);



}

yardGreening(["550"])