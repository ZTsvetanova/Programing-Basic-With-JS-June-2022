function numberPyramid(input) {

    let num = Number(input[0]);
    let isBigger = false;
    let count = "";
    let nums = Number(1);

    for (let roll = 1; roll <= num; roll++) {
        for (let cell = 1; cell <= roll; cell++) {
            if(nums>num){

                isBigger=true;
                break;
                
            }

            count +=`${nums} `
            nums++;
            
        }
        
        console.log(count);
        count = "";
        if(isBigger){
            break;
        }
    }

}
numberPyramid(["7"])