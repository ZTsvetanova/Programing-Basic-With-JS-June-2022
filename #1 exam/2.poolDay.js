function poolDay (input) {

    let people = Number(input[0]);
    let priceForEntry = Number(input[1]);
    let priceForDeskChair = Number(input[2]);
    let priceForUmbrellas = Number(input[3]);

    let moneyForEntry = people*priceForEntry;
    let peopleWithDeskChair  = Math.round (people*0.75);
    let moneyForDeskChair = peopleWithDeskChair*priceForDeskChair;
    let umbrellas = Math.round (people/2);
    let moneyForUmbrellas = umbrellas*priceForUmbrellas;
    let sum = moneyForDeskChair+moneyForEntry+moneyForUmbrellas;
    
    console.log(sum);

}

poolDay(["21" , "5.50" , "4.40" , "6.20"])