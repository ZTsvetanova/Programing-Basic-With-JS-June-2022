function sumSeconds(input){

    let firstTime = Number(input[0]);
    let secondTime = Number(input[1]);
    let thirdTime = Number(input[2]);

    let sumTime = firstTime+secondTime+thirdTime

    let sec = sumTime%60;
    let min = Math.floor(sumTime/60);

    if(sec<10){
        console.log(`${min}:0${sec}`)
    } else{
        console.log(`${min}:${sec}`)
    }



}
sumSeconds(["35",
"45",
"44"])
