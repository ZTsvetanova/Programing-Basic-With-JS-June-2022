function traveling(input) {

    let index = 0;
    let money = 0;
    let command = input[index];
    let stop = false;
    let destination = "";

    while (command !== "End" || stop===true) {
        destination = input[index];
        index++;
        let needMoney = Number(input[index]);
        index++;
        let sumMoney = 0;
        while (needMoney > sumMoney) {
            money = Number(input[index]);  
            sumMoney += money;
            if (sumMoney >= needMoney) {
                console.log(`Going to ${destination}!`)
                index++;
                break;
            }
            
        }
    }
    

}
traveling(["Greece",
    "1000",
    "200",
    "200",
    "300",
    "100",
    "150",
    "240",
    "Spain",
    "1200",
    "300",
    "500",
    "193",
    "423",
    "End"])
