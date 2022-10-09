function specialNumbers(input) {

    let number = Number(input[0]);
    let countA = 0;
    let countB = 0;
    let countC = 0;
    let countD = 0;
    let sum = "";
    
    
    
    

    for (let a = 1; a <= 9; a++) {
       countA = 0; 
       
        if (number % a !== 0){
        countA++}

        for (let b = 1; b <= 9; b++) {
            countB = 0; 

            if (number % b !== 0){
            countB++}

            for (let c = 1; c <= 9; c++) {
                countC = 0; 

                if (number % c !== 0){
                countC++}

                for (let d = 1; d <= 9; d++) {
                    countD = 0; 

                    if (number % d !== 0){
                    countD++}

                    if(countA === 0 && countB === 0 && countC === 0 && countD === 0 ){
                        sum += `${a}${b}${c}${d} `   
                    }
                }
            }
        }
    }
    
    console.log(sum)

}
specialNumbers(["16"])