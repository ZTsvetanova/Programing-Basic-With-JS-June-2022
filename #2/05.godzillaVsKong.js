function godzillaVsKong(input){

    let filmBudget = Number(input[0]);
    let numberOfExtras = Number(input[1]);
    let priceOfOneGarment = Number(input[2]);
    let decor = filmBudget*0.10;
    let moneyForBudget = numberOfExtras*priceOfOneGarment;

    if(numberOfExtras>150){
        moneyForBudget=moneyForBudget*0.9
    }
    sum = moneyForBudget + decor;
    diff = (Math.abs(sum-filmBudget)).toFixed(2);

    if(sum<=filmBudget){
        console.log(`Action!`)
        console.log(`Wingard starts filming with ${diff} leva left.`)
    } else {
        console.log(`Not enough money!`)
        console.log(`Wingard needs ${diff} leva more.`)

    }
}
godzillaVsKong (["20000",
"120",
"55.5"])
