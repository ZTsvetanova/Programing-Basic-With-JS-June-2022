function smallShop (input) {

    let product = input[0];
    let city = input[1];
    let count = Number(input[2]);
    let finalMoney = 0;

    if(city === "Sofia"){
        switch(product){
        case "coffee" : finalMoney = count*0.50; break;
        case "water"  : finalMoney = count*0.80; break;
        case "beer"   : finalMoney = count*1.20; break;
        case "sweets" : finalMoney = count*1.45; break;
        case "peanuts": finalMoney = count*1.60; break;
        }
    }else if(city === "Plovdiv"){
        switch(product){
            case "coffee" : finalMoney = count*0.40; break;
            case "water"  : finalMoney = count*0.70; break;
            case "beer"   : finalMoney = count*1.15; break;
            case "sweets" : finalMoney = count*1.30; break;
            case "peanuts": finalMoney = count*1.50; break;
            }
    }else if(city === "Varna"){
        switch(product){
            case "coffee" : finalMoney = count*0.45; break;
            case "water"  : finalMoney = count*0.70; break;
            case "beer"   : finalMoney = count*1.10; break;
            case "sweets" : finalMoney = count*1.35; break;
            case "peanuts": finalMoney = count*1.55; break;
            }
    }


    console.log((finalMoney).toFixed(2))

  
  

}
smallShop(["coffee",
"Varna",
"2"])
smallShop(["peanuts",
"Plovdiv",
"1"])
smallShop(["beer",
"Sofia",
"6"])
smallShop(["water",
"Plovdiv",
"3"])
smallShop(["sweets",
"Sofia",
"2.23"])
