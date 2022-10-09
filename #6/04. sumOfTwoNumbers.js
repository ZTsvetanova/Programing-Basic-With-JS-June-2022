function sumOfTwoNumbers(input){

    let first = Number(input[0]);
    let second = Number(input[1]);
    let magic = Number(input[2]);
    let count = 0;
    let ready = false;

    for(let x = first; x<=second; x++){
        for(let y = first; y<=second; y++){
            count++;
            let sum = x+y;
            if(sum === magic){
                 console.log(`Combination N:${count} (${x} + ${y} = ${magic})`);
                 ready = true;
                 break;
            }
            
        }
        if(ready){
            break;
        }
    }
    if(!ready){
        console.log(`${count} combinations - neither equals ${magic}`)
    }

}
sumOfTwoNumbers(["23",
"24",
"20"])



