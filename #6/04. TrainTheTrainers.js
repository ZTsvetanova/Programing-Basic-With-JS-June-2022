function trainTheTrainers(input){

    let jury = Number(input[0]);
    let averageGrade = 0;
    let index = 1;
    let command = input[index];
    index++;
    let count = 0;
    let avCount = 0;
    let sum = 0;
    while(command !== "Finish"){
    count++;
    for(let x=1; x<=jury; x++){
        
    let number = input[index];
    index++;
    sum += Number(number);
    
    }
    averageGrade = sum/jury;
    avCount += averageGrade;
    sum = 0;

    console.log(`${command} - ${averageGrade.toFixed(2)}.`)

    
    command = input[index];
    index++;

}
let allSum = Number(avCount/count);
console.log(`Student's final assessment is ${allSum.toFixed(2)}.`)
}
trainTheTrainers(["2",
"While-Loop",
"6.00",
"5.50",
"For-Loop",
"5.84",
"5.66",
"Finish"])
