function examPreparation(input) {

    let index = 0;
    let numberBreak = Number(input[index]);
    index++;
    let name = input[index];
    index++;
    let grade = input[index];
    index++
    let averageGrade = 0;
    let count = 0;
    let breakCount = 0;
    let allGrade = 0;
    let taskName = "";

    while (name !== "Enough") {
        count++;
        taskName = name;
        let taskGrade = Number(grade);
        if (taskGrade <= 4) {
            breakCount++;
            if (breakCount >= numberBreak) {
                console.log(`You need a break, ${breakCount} poor grades.`)
                break;
            } 
        }
        allGrade += taskGrade;
       
        averageGrade = allGrade / count;
        name = input[index];
        index++;
        grade = (input[index]);
        index++;
    }
    if (name === "Enough") {

        console.log(`Average score: ${averageGrade.toFixed(2)}`)
        console.log(`Number of problems: ${count}`)
        console.log(`Last problem: ${taskName}`)

    }





}
examPreparation(["3",
"Money",
"6",
"Story",
"4",
"Spring Time",
"5",
"Bus",
"6",
"Enough"])
