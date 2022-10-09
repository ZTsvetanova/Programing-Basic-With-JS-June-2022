function vacation(input) {

    let needMoney = Number(input[0]);
    let herMoney = Number(input[1]);
    let index = 2;
    let dayCounter = 0;
    let daySpendCounter = 0;

    while (needMoney > herMoney) {
        let SpendOrSave = input[index];
        index++;
        let dayMoney = Number(input[index]);
        index++;
        dayCounter++;

        switch (SpendOrSave) {
            case "spend":
                if (dayMoney >= herMoney) {
                    herMoney = 0;
                }else{
                herMoney = herMoney - dayMoney
                }
                daySpendCounter++;
                

                break;
            case "save":
                herMoney += dayMoney;
                daySpendCounter = 0;
                break;
        }
        if (daySpendCounter === 5) {
            break;
        }
    }
    if (needMoney <= herMoney) {
        console.log(`You saved the money for ${dayCounter} days.`)
    }
    if (daySpendCounter >= 5) {
        console.log(`You can't save the money.`);
        console.log(`${dayCounter}`);
    }
}
vacation(["250",
"150",
"spend",
"50",
"spend",
"50",
"save",
"100",
"save",
"100"])
