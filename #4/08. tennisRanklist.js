function tennisRanklist (input){

    let numberTour = Number(input[0]);
    let firstPoints = Number(input[1]);
    let index = 2;
    let winCount = 0;
    let points = 0;
    

    for(let i = 1; i<=numberTour; i++){
        let typeFinal = input[index]; 

        switch(typeFinal){
            case "W": 
            points += 2000;
            winCount++;
            break;
            case "F": 
            points += 1200;
            break;
            case "SF": 
            points += 720;
            break;

        }
        index++;

    }
    let allPoints = firstPoints+points;
    let averagePoints = points/numberTour;
    let percentWin = winCount/numberTour*100;
    console.log(`Final points: ${allPoints}`)
    console.log(`Average points: ${Math.floor(averagePoints)}`)
    console.log(`${percentWin.toFixed(2)}%`)


}
tennisRanklist(["7",
"1200",
"SF",
"F",
"W",
"F",
"W",
"SF",
"W"])