function onTimeForTheExam(input){

    let examHours = Number(input[0]);
    let examMin = Number(input[1]);
    let hoursOfArrival = Number(input[2]);
    let minOfArrival = Number(input[3]);
    let examTime = Number(examHours*60)+examMin;
    let arrivalTime = Number(hoursOfArrival*60)+minOfArrival;
    let diff = Number(Math.abs(examTime-arrivalTime));
    let min = Number(diff%60);
    let hours = Number((diff-min)/60);

    if(arrivalTime>examTime){
        console.log(`Late`)
        if(diff<60){
              console.log(`${min} minutes after the start`)
        }else{
            if(min<10){
                console.log(`${hours}:0${min} hours after the start`)
            }else{
                console.log(`${hours}:${min} hours after the start`)
            }
        }
    }
       
     else if(examTime>=arrivalTime && diff<=30){
        if(examTime===arrivalTime){
           console.log(`On time`)
        }else if(diff<=30 && examTime>arrivalTime){
           console.log(`On time`)
           console.log(`${diff} minutes before the start`)
        }}
    else if(examTime>arrivalTime && diff>30){
        console.log(`Early`)
        if(diff<60){
              console.log(`${min} minutes before the start`)
        }else if(diff>=60){
             if(min<10){
              console.log(`${hours}:0${min} hours before the start`)
            }else{
              console.log(`${hours}:${min} hours before the start`)    
            }
        
        }
     }}

onTimeForTheExam(["10",
"00",
"9",
"20"])