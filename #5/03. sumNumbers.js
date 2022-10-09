function sumNumbers(input) {

    let firstNumber = Number(input[0]);
    let index = Number(1);
    let secondNumber = Number(0);
    let sum = Number(0);

    while (sum < firstNumber) {
        secondNumber = Number(input[index]);
        sum += Number(secondNumber);
        index++;
        
    }

    console.log(`${sum}`)
}
sumNumbers(["100",
    "10",
    "20",
    "30",
    "40"])
