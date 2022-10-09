function operationsBetweenNumbers (input){

    let firstNum = Number(input[0]);
    let secondNum = Number(input[1]);
    let operations = input[2];
    let evenOdd = 0;
    let remainder = 0;
    let result = 0;

    

    switch(operations){
        case "+":
            result=firstNum+secondNum;
            evenOdd = result%2;
            if(evenOdd===0){
                evenOdd = "even"
            }else{
                evenOdd = "odd"
            }
            console.log(`${firstNum} ${operations} ${secondNum} = ${result} - ${evenOdd}`)
            break;
        case "-":
            result=firstNum-secondNum;
            evenOdd = result%2;
            if(evenOdd===0){
                evenOdd = "even"
            }else{
                evenOdd = "odd"
            }
            console.log(`${firstNum} ${operations} ${secondNum} = ${result} - ${evenOdd}`)
            break;
        case "*":
            result=firstNum*secondNum;
            evenOdd = result%2;
            if(evenOdd===0){
                evenOdd = "even"
            }else{
                evenOdd = "odd"
            }
            console.log(`${firstNum} ${operations} ${secondNum} = ${result} - ${evenOdd}`)
            break;
        case "/":
            if(secondNum===0){
                console.log(`Cannot divide ${firstNum} by zero`)
            }else{
                result=(firstNum/secondNum).toFixed(2);
                console.log(`${firstNum} / ${secondNum} = ${result}`)
            }
            break;
        case "%":
            if(secondNum===0){
                console.log(`Cannot divide ${firstNum} by zero`)
            }else{
                remainder=firstNum%secondNum;
                console.log(`${firstNum} % ${secondNum} = ${remainder}`)
            }
            
            break;
    }


}
operationsBetweenNumbers(["3",
"3",
"*"])
