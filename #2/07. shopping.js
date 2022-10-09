function shopping(input){
    let petersBudget = Number(input[0]);
    let numberOfVideoCard = Number(input[1]);
    let numberOfProcessors = Number(input[2]);
    let numberOfRam = Number(input[3]);

    let priceOfVideoCard = Number(250);
    let moneyForVideoCards = priceOfVideoCard*numberOfVideoCard;
    let priceForProcessor = moneyForVideoCards*0.35;
    let priceForRam = moneyForVideoCards*0.10;
    let moneyForProcessors = priceForProcessor*numberOfProcessors;
    let moneyForRam = priceForRam*numberOfRam;
    let sum = moneyForProcessors+moneyForRam+moneyForVideoCards;

    if(numberOfVideoCard>numberOfProcessors){
        sum=sum*0.85;
    }
        let diff=(Math.abs(petersBudget-sum)).toFixed(2);

        if(petersBudget>=sum){
            console.log(`You have ${diff} leva left!`)
        } else {
            console.log(`Not enough money! You need ${diff} leva more!`)
        }



}

shopping(["900",
"2",
"1",
"3"])

shopping(["920.45",
"3",
"1",
"1"])

