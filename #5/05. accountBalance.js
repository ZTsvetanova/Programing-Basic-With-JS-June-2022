function accountBalance(input) {

    let index = 0;
    let sum = Number(input[index]);
    let total = 0;

    while (sum !== "NoMoreMoney") {
        let money = Number(sum);

        if (money < 0) {
            console.log(`Invalid operation!`)
            break;
        }
        total += money;

        
            console.log(`Increase: ${money.toFixed(2)}`)
            
            index++;
            sum = input[index];


        }
       

    
    console.log(`Total: ${total.toFixed(2)}`)

}
accountBalance(["5.51",
    "69.42",
    "100",
    "NoMoreMoney"])
