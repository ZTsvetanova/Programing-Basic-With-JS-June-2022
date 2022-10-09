function graduation(input) {

    let name = input[0];
    let index = Number(1);
    let breakCount = Number(0);
    let count = Number(0);
    let allGrade = Number(0);

    while (breakCount !== 2) {
        let grade = Number(input[index]);

        if (grade >= 4) {
            count++;
            allGrade += Number(grade);

        } else if (grade < 4) {
            breakCount++

            if (breakCount === 2) {
                break;

            }
            count++;
        }
        if (count === 12) {
            break;
        }

        index++
    }
    let finalGrade = allGrade / count;
    if (breakCount === 2) {
        console.log(`${name} has been excluded at ${count} grade`)
    } else {
        console.log(`${name} graduated. Average grade: ${finalGrade.toFixed(2)}`)
    }
}
graduation(["Mimi",
    "5",
    "6",
    "5",
    "6",
    "5",
    "6",
    "6",
    "2",
    "3"])
