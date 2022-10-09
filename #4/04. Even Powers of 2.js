function evenPowersOfTwo (input){

    let n=Number(input[0]);
    let num = 1;

    for(let a=0; a<=n; a+=2){
        console.log(num);
        num=num*2*2;
    }
}
evenPowersOfTwo(["6"])