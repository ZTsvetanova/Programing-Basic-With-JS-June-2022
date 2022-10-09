function sumPrimeNonPrime(input) {

    let index = 0;
    let command = input[index];
    index++;
    let count = 0;
    let sumPrime = 0;
    let sumNonPrime = 0;

    while (command !== "stop") {

        let number = Number(command);

        if (number < 0) {
            console.log(`Number is negative.`)

        }

        for (let d = 2; d < number; d++) {

            if (number % d === 0) {
                count += d;
            }
        }



        if (number <= 0) {
            number = 0;
            count = 1;
        }
            if (count !== 0) {
                sumNonPrime += number;
            } else {
                sumPrime += number;
            }
            count = 0;
            command = input[index];
            index++
        
    }
    console.log(`Sum of all prime numbers is: ${sumPrime}`)
    console.log(`Sum of all non prime numbers is: ${sumNonPrime}`)

}
sumPrimeNonPrime(["3",
"-3",
"9",
"0",
"7",
"19",
"4",
"stop"])

