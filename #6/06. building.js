function building(input) {

    let floorCount = Number(input[0]);
    let roomCount = Number(input[1]);
    

    for (let floor = floorCount; floor > 0; floor--) {
        let sum = ""
        for (let room = 0; room < roomCount; room++) {

            if(floor===floorCount){
                sum += `L${floor}${room} `;
               
            }else if(floor%2!==0){
                sum += `A${floor}${room} `;
                    
            }else{
                sum +=`O${floor}${room} `;
                
            }

        }

        console.log(sum)
    }

}
building(["6", "4"])