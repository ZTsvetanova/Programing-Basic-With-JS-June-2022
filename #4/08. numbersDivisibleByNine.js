function numbersDivisibleByNine(input) {

    let firstNumber = Number(input[0]);
    let secondNumber = Number(input[1]);
    let sum = Number(0);


    
        
    for (let num = firstNumber; num <= secondNumber; num++) {
        if (num % 9 === 0) {
            sum += Number(num);
            
            

        }
        
    }
    console.log(`The sum: ${sum}`)
    for (let num = firstNumber; num <= secondNumber; num++) {
        if (num % 9 === 0) {
            sum += Number(num);
           
            console.log(num);

        }
        
    }
    
}
numbersDivisibleByNine(["100", "200"])