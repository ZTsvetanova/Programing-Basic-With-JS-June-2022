function maxNumber(input) {

    let index = 0;
    let command = input[index];
    let min = Number.MIN_SAFE_INTEGER;


    while (command !== "Stop") {
        let num = Number(input[index]);
        if (num > min) {

            min = num;

        }
        command = input[index];
        ++index;

    }
    console.log(`${min}`)

}
maxNumber(["-100",
    "-99",
    "-80",
    "-70",
    "Stop"])
