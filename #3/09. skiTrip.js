function skiTrip (input){

    let days = Number(input[0]);
    let type = input[1];
    let assessment = input[2];
    days--

    let needMoney = 0;
    let moneyToOneDay = 0;

    switch(type){
        case "room for one person":
            moneyToOneDay = Number(18);
            needMoney = moneyToOneDay*days;
            break;
        case "apartment":
            moneyToOneDay = Number(25);
            needMoney = moneyToOneDay*days;
            days++;
            if(days<10){
                needMoney = needMoney*0.70;
            }else if(days<=15){
                needMoney = needMoney*0.65
            }else{
                needMoney = needMoney*0.50
            }
            break;
        case "president apartment":
            moneyToOneDay = Number(35);
            needMoney = moneyToOneDay*days;
            days++;
            if(days<10){
                needMoney = needMoney*0.90;
            }else if(days<=15){
                needMoney = needMoney*0.85
            }else{
                needMoney = needMoney*0.80
            }
            break;
    }

           switch(assessment){
               case "positive":
                   needMoney = (needMoney*1.25).toFixed(2);
                   break;
                case "negative":
                    needMoney = (needMoney*0.90).toFixed(2);
                    break;
           }
console.log(needMoney)
}

skiTrip(["2",
"apartment",
"positive"])


