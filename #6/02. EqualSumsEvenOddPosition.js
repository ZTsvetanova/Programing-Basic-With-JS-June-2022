function equalSumsEvenOddPosition (input){

    let firstNum = Number(input[0]);
    let secontNum = Number(input[1]);
    let print = "";

    for(let n=firstNum; n<=secontNum; n++){
        let thisNum = "" + n;
        let oddSum = 0;
        let evenSum = 0;
        
        for(let p = 0; p<=thisNum.length; p++){
            let currentDigit = Number(thisNum.charAt(p));
            if(p%2===0){
                evenSum += currentDigit;
            }else{
                oddSum += currentDigit;
            }
           
        }
        if(oddSum===evenSum){
            print += `${n} `
        }
    }
    console.log(print)
}
equalSumsEvenOddPosition(["123456",
"124000"])
