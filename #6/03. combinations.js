function combinations(input){

    let count = 0;
    let n = Number(input[0]);

    for(let x=0; x<=n; x++){
        for(let y=0; y<=n; y++){
            for(let z=0; z<=n; z++){
                let sum = x+y+z;
                if(sum === n){
                    count++;
                }
            }
        }
    }
    console.log(count)

}
combinations(["5"])