function multiplicationTable(input) {

    let number = Number(input[0]);

    for (let x = 1; x <= 10; x++) {
        let sum = x*number
        
        console.log(`${x} * ${number} = ${sum}`)
        
    }
}
multiplicationTable(["5"])