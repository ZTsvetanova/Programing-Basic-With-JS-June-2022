function lunchBreak(input){

    let name = input[0];
    let timeForEpisode = Number(input[1]);
    let timeForLunchBreak = Number(input[2]);

    let timeForLunch = timeForLunchBreak/8;
    let timeForRelax = timeForLunchBreak/4;

    let freeTime = timeForLunchBreak-timeForLunch-timeForRelax;
    let diff = Math.ceil(Math.abs(freeTime-timeForEpisode));

    if(freeTime>=timeForEpisode){
        console.log(`You have enough time to watch ${name} and left with ${diff} minutes free time.`)
    } else {
        console.log(`You don't have enough time to watch ${name}, you need ${diff} more minutes.`)
    }

}

lunchBreak(["Game of Thrones",
"60",
"96"])

lunchBreak(["Teen Wolf",
"48",
"60"])
