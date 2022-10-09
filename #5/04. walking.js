function walking(input) {

    let index = 0;
    let action = input[index];
    let stepCounter = Number(0);

    while (action !== "Going home") {
        stepCounter += Number(action);
        index++;
        

        if (stepCounter >= 10000) {
            let diff = Math.abs(stepCounter - 10000);
            console.log(`Goal reached! Good job!`);
            console.log(`${diff} steps over the goal!`);
            break;
            
        }
        action = input[index];

    }
    if (action === "Going home") {
        index++;
        action = Number(input[index]);
        stepCounter += action;
        let diff = Math.abs(stepCounter - 10000);
        if (stepCounter >= 10000) {
            console.log(`Goal reached! Good job!`);
            console.log(`${diff} steps over the goal!`);
            
        } else {
            console.log(`${diff} more steps to reach goal.`);
            

        }
}
}

walking(["1000",
"1500",
"2000",
"6500"])


