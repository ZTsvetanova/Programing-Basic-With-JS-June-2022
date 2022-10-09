function histogram(input){

    let index = 0;
    let num = Number(input[index]);
    index++

    let countOne = 0;
    let countTwo = 0;
    let countThree = 0;
    let countFour = 0;
    let countFive = 0;
    let count = 0;

    for(let x=1; x<=num; x++){

    let number = input[x];
    if(number>0 && number<200){
        countOne +=1
    }else if(number>=200 && number<400){
        countTwo +=1
    }else if(number>=400 && number<600){
        countThree +=1
    }else if(number>=600 && number<800){
        countFour +=1
    }else if(number>=800 && number<=1000){
        countFive +=1
    }
        count +=1
    
    }
    let pOne = ((countOne/count)*100).toFixed(2);
    let pTwo = ((countTwo/count)*100).toFixed(2);
    let pThree = ((countThree/count)*100).toFixed(2);
    let pFour = ((countFour/count)*100).toFixed(2);
    let pFive = ((countFive/count)*100).toFixed(2)

    console.log(`${pOne}%`)
    console.log(`${pTwo}%`)
    console.log(`${pThree}%`)
    console.log(`${pFour}%`)
    console.log(`${pFive}%`)
}
histogram(["7",
"800",
"801",
"250",
"199",
"399",
"599",
"799"])
	