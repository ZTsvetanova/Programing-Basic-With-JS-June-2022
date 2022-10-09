function fruitShop (input){

    let fruit = input[0];
    let day = input[1];
    let quantity = Number(input[2]);
    let sum = 0;

    if(day==="Monday" || day==="Tuesday" || day==="Wednesday" || day==="Thursday" || day==="Friday"){
        switch(fruit){
            case "banana":sum=(quantity*2.50).toFixed(2);
            console.log(sum);
                break;
            case "apple":sum=(quantity*1.20).toFixed(2);
            console.log(sum);
                break;
            case "orange":sum=(quantity*0.85).toFixed(2);
            console.log(sum);
                break;
            case "grapefruit":sum=(quantity*1.45).toFixed(2);
            console.log(sum);
                break;
            case "kiwi":sum=(quantity*2.70).toFixed(2);
            console.log(sum);
                break;
            case "pineapple":sum=(quantity*5.50).toFixed(2);
            console.log(sum);
                break;
            case "grapes":sum=(quantity*3.85).toFixed(2);
            console.log(sum);
                break;
        default:
            console.log(`error`)                   
        }
    }else if(day==="Saturday" || day==="Sunday"){
        switch(fruit){
            case "banana":sum=(quantity*2.70).toFixed(2);
            console.log(sum);
                break;
            case "apple":sum=(quantity*1.25).toFixed(2);
            console.log(sum);
                break;
            case "orange":sum=(quantity*0.90).toFixed(2);
            console.log(sum);
                break;
            case "grapefruit":sum=(quantity*1.60).toFixed(2);
            console.log(sum);
                break;
            case "kiwi":sum=(quantity*3.00).toFixed(2);
            console.log(sum);
                break;
            case "pineapple":sum=(quantity*5.60).toFixed(2);
            console.log(sum);
                break;
            case "grapes":sum=(quantity*4.20).toFixed(2);
            console.log(sum);
                break;
        default:
            console.log(`error`) 
        }
    }else{
        console.log(`error`);
    }

    

}
fruitShop(["apple",
"Tuesday",
"2"])
