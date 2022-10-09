function worldSwimmingRecord(input){

    let recordInSec = Number(input[0]);
    let metres = Number(input[1]);
    let timeInSecToMetres = Number(input[2]);

    let delay = (Math.floor(metres/15))*12.5;
    let timeIvan = ((metres*timeInSecToMetres)+delay).toFixed(2);
    let diff=(Math.abs(timeIvan-recordInSec)).toFixed(2);

    if(timeIvan>=recordInSec){
        console.log(`No, he failed! He was ${diff} seconds slower.`)
    } else {
        console.log(`Yes, he succeeded! The new world record is ${timeIvan} seconds.`)
    }

}

worldSwimmingRecord(["10464",
"1500",
"20"])

worldSwimmingRecord(["55555.67",
"3017",
"5.03"])

