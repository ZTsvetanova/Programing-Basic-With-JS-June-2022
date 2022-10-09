function journey (input){

    let budget = Number(input[0]);
    let season = input[1];
    let destination = 0;
    let sleepoverType = 0;
    let needMoney = 0;

   

    if(budget<=100){
        destination = "Bulgaria"
        switch(season){
        case "summer":
            needMoney = budget*0.30;
            break;
        case "winter":
            needMoney = budget*0.70;
            break;
        }

    }else if(budget<=1000){
        destination = "Balkans"
        switch(season){
        case "summer":
            needMoney = budget*0.40;
            break;
        case "winter":
            needMoney = budget*0.80;
            break;
        }
    }else{
        destination = "Europe"
        needMoney = budget*0.90;
    }
    if(season==="summer"){
        switch(destination){
            case "Bulgaria":
            case "Balkans":
                sleepoverType = "Camp"
                break;
            case "Europe":
                sleepoverType = "Hotel"
                break
        }
        
    }else{
        sleepoverType = "Hotel"
        }
    needMoney = needMoney.toFixed(2);

    console.log(`Somewhere in ${destination}`)
    console.log(`${sleepoverType} - ${needMoney}`)



}
journey(["1678.53", "summer"])