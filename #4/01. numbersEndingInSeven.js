function numbersEndingInSeven() {

    for (let x = 7; x <= 997; x++) {
        if (x % 10 === 7) {
            console.log(x)
        }
    }
}
numbersEndingInSeven()