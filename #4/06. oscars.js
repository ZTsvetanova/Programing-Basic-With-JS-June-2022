function oscars(input) {

    let nameActor = input[0];
    let pointsOfAcademy = Number(input[1]);
    let numberOfJuryParticipants = Number(input[2]);
    let index = Number(3);
    let allPoints = pointsOfAcademy;
    

    for (let i = 0; i < numberOfJuryParticipants; i++) {

        let nameJury = input[index];
        index++;
        let pointsOfJury = input[index];
        index++;
        let points = (nameJury.length * pointsOfJury) / 2;
        allPoints += points;
        //console.log(nameJury.length)
        if(allPoints>=1250.5){
            console.log(`Congratulations, ${nameActor} got a nominee for leading role with ${allPoints.toFixed(1)}!`)
            break;
        }
    }
 
    let diff = (Math.abs(allPoints-1250.5)).toFixed(1);
    if(allPoints<1250.5){
    console.log(`Sorry, ${nameActor} you need ${diff} more!`)
    }
}
oscars(["Sandra Bullock",
"340",
"5",
"Robert De Niro",
"50",
"Julia Roberts",
"40.5",
"Daniel Day-Lewis",
"39.4",
"Nicolas Cage",
"29.9",
"Stoyanka Mutafova",
"33"])
