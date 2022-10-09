function fishingBoat(input){

    let budget = Number(input[0]);
    let season = input[1];
    let fishermen = Number(input[2]);
    let needMoney = 0;
    let even = fishermen%2

    switch(season){
        case "Spring":
            if(fishermen<=6){
                needMoney=3000*0.90
            }else if(fishermen<=11){
                needMoney=3000*0.85
            }else if(fishermen>=12){
                needMoney=3000*0.75
            }
                if(even===0){
                    needMoney=needMoney*0.95;
                
            }
            break;
        case "Summer":
            if(fishermen<=6){
                needMoney=4200*0.90
            }else if(fishermen<=11){
                needMoney=4200*0.85
            }else if(fishermen>=12){
                needMoney=4200*0.75
            }
                if(even===0){
                    needMoney=needMoney*0.95;
                
            }
            break;
        case "Autumn":
            if(fishermen<=6){
                needMoney=4200*0.90
            }else if(fishermen<=11){
                needMoney=4200*0.85
            }else if(fishermen>=12){
                needMoney=4200*0.75
            }
            break;
        case "Winter":
            if(fishermen<=6){
                needMoney=2600*0.90
            }else if(fishermen<=11){
                needMoney=2600*0.85
            }else if(fishermen>=12){
                needMoney=2600*0.75
            }
                if(even===0){
                    needMoney=needMoney*0.95;
                
            }
            break;
    }

    let diff = (Math.abs(needMoney-budget)).toFixed(2);

    if(budget>=needMoney){
        console.log(`Yes! You have ${diff} leva left.`)
    }else{
        console.log(`Not enough money! You need ${diff} leva.`)
    }


}
fishingBoat(["3000",
"Spring",
"12"])
