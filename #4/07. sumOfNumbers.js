function sumOfNumbers (input){

    let num = (input[0]);
    let sum = 0;

    for(x=0; x<num.length; x++ ){
       let result = Number(num[x]);
       sum +=result;
       
    }
    console.log(`The sum of the digits is:${sum}`)

}
sumOfNumbers(["564891"])