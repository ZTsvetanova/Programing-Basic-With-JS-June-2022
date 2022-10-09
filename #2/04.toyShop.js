function toyShop(input){
    
    let pricePuzzle = 2.60;
    let priceDoll = 3.00;
    let priceBear = 4.10;
    let priceMinion = 8.20;
    let priceTruck = 2.00;

    let priceHoliday = Number(input[0]);
    let amountOfPuzzle = Number(input[1]);
    let amountOfDoll = Number(input[2]);
    let amountOfBear = Number(input[3]);
    let amountOfMinion = Number(input[4]);
    let amountOfTruck = Number(input[5]);

    let sum = (amountOfPuzzle*pricePuzzle) + (amountOfDoll*priceDoll) + (amountOfBear*priceBear) + (amountOfMinion*priceMinion) + (amountOfTruck*priceTruck);
    let amountOfToys = amountOfBear + amountOfDoll + amountOfMinion + amountOfPuzzle + amountOfTruck;

    if(amountOfToys >= 50) {
        sum = sum*0.75
    }

    sum=sum*0.90;

    let diff = (Math.abs(priceHoliday-sum)).toFixed(2);

    if(priceHoliday<=sum){
        console.log(`Yes! ${diff} lv left.`)
     } else {
        console.log(`Not enough money! ${diff} lv needed.`)
    }



}
toyShop(["40.8",
"20",
"25",
"30",
"50",
"10"])
