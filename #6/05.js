function tr(input){

    let index = 0;
    let coment = input[index];
    index++;
    while(coment !== "End"){
        let destination = coment;
        let cost = Number(coment);
        if(destination !=cost){
            console.log(`Going to ${destination}!`)
        }
        coment = input[index];
        index++
    }

}
tr(["France",
"2000",
"300",
"300",
"200",
"400",
"190",
"258",
"360",
"Portugal",
"1450",
"400",
"400",
"200",
"300",
"300",
"Egypt",
"1900",
"1000",
"280",
"300",
"500",
"End"])
	