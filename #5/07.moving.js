function moving (input){

    let index = 0;
    let width = Number(input[index]);
    index++;
    let lendght = Number(input[index]);
    index++;
    let height = Number(input[index]);
    index++;
    let spaceOfApartment = width*lendght*height;
    let command = input[index];
    let diff = 0;
    

    while(command !== "Done"){
        let cubs = Number(command);
        
        if(cubs>spaceOfApartment){
            diff = Math.abs(cubs-spaceOfApartment);
            console.log(`No more free space! You need ${diff} Cubic meters more.`);
            break;
        }
        spaceOfApartment -= cubs;
        index++;
        command = input[index];
    }
    if(command === "Done"){
        diff = Math.abs(spaceOfApartment)
        console.log(`${diff} Cubic meters left.`)
    }

}
moving(["10", 
"1",
"2",
"4", 
"6",
"Done"])
