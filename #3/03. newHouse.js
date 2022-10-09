function newHouse(input){

    let typeFlowers = input[0];
    let numberFlowers = Number(input[1]);
    let budget = Number(input[2]);
    let needMoney = 0;

    switch(typeFlowers){
        case "Roses":
            needMoney = numberFlowers*5;
            if(numberFlowers>80){
                needMoney = needMoney*0.9;
            }
            break;
        case "Dahlias":
            needMoney = numberFlowers*3.80;
            if(numberFlowers>90){
                needMoney=needMoney*0.85;
            }
            break;
        case "Tulips":
            needMoney = numberFlowers*2.80;
            if(numberFlowers>80){
                needMoney=needMoney*0.85;
            }
            break;
        case "Narcissus":
            needMoney = numberFlowers*3;
            if(numberFlowers<120){
                needMoney=needMoney*1.15;
            }
            break;
        case "Gladiolus":
            needMoney = numberFlowers*2.50;
            if(numberFlowers<80){
                needMoney = needMoney*1.20;
            }
            break;
    }
    let diff = (Math.abs(needMoney-budget)).toFixed(2);

    if(budget>=needMoney){
        console.log(`Hey, you have a great garden with ${numberFlowers} ${typeFlowers} and ${diff} leva left.`)
    }else{
        console.log(`Not enough money, you need ${diff} leva more.`)
    }

}
newHouse(["Tulips",
"88",
"260"])
