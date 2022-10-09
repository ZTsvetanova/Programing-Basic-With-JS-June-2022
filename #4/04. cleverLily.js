function cleverLily(input) {

    let age = Number(input[0]);
    let priceWashingMachine = Number(input[1]);
    let priceToOneToy = Number(input[2]);
    let toyCounter = Number(0);
    let money = Number(0);
    let sum = Number(10);



    for (let a = 1; a <= age; a++) {

        if (a % 2 === 1) {

            ++toyCounter
        } else if (a % 2 === 0) {

            money += sum;
            sum = sum + 10
            money--;

            

        }
        
    }
    

    let moneyFromToys = toyCounter * priceToOneToy;
    let allMoney = moneyFromToys + money;
    let diff = (Math.abs(priceWashingMachine - allMoney)).toFixed(2);

    if (priceWashingMachine<=allMoney) {
         console.log(`Yes! ${diff}`)
    } else {
        console.log(`No! ${diff}`)
    }

}
cleverLily(["21",
    "1570.98",
    "3"])

