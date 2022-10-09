function timeWithMinutes(input){

    let hours = Number(input[0]);
    let minutes = Number(input[1]);

    let timeInMinutes = hours*60 + minutes;

    let sumTime = timeInMinutes+15;

    let finallyHours = Math.floor(sumTime/60);
    let finallyMinutes = sumTime % 60;
    let totalHours = 0;
    let totalMinutes = 0;


    if(finallyHours>=24){
        totalHours = (finallyHours%24)
    } else { totalHours = finallyHours  
        
    }
    if(finallyMinutes<10){
        totalMinutes = (`0${finallyMinutes}`)
    }else{totalMinutes = finallyMinutes
    }
    console.log(`${totalHours}:${totalMinutes}`)

    //console.log(finallyHours);

}
timeWithMinutes(["23", "59"])	
