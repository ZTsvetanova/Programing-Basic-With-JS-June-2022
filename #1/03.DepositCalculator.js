function depositCalculator(input){

    let depositSum = Number(input[0]);
    let depositTermInMounths = Number(input[1]);
    let annualInterestRate = Number(input[2]);
    let annualInterestRateNumber = annualInterestRate/100;
    let perYear = depositSum * annualInterestRateNumber;
    let perMounth = perYear/12;
    let sum = depositSum + (depositTermInMounths*perMounth);
    console.log(sum)

}

depositCalculator(["200 ",
"3 ",
"5.7 "])
