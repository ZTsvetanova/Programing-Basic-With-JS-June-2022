function cinemaTickets(input){

    let index = 0;
    let studentCount = 0;
    let standardCount = 0;
    let kidCount = 0;
    let allCount = 0;
    let sumAllCount = 0;
    let command = input[index];
    

    while(command !== "Finish"){
        
        let movie = command;
        index++
        let chear = Number(input[index]);
        index++;
    
        for(let x = 1; x<=chear; x++){
            command = input[index];
            if(command === "End"){
                index++;
                break;
            }
            switch(command){
                case "student":
                    studentCount++;
                    allCount++;
                    break;
                case "standard":
                    standardCount++;
                    allCount++;
                    break;
                case "kid":
                    kidCount++;
                    allCount++;
                    break;
                
            }
           
            command=input[index];
            index++;
        }
        
        
        sumAllCount += allCount;  
        let percent = allCount/chear*100;
        allCount=0;
        

        console.log(`${movie} - ${percent.toFixed(2)}% full.`)
       
       command = input[index];
    }
    console.log(`Total tickets: ${sumAllCount}`)
    let percentStudent = studentCount/sumAllCount*100;
    let percentStandart = standardCount/sumAllCount*100;
    let percentKid = kidCount/sumAllCount*100;
    console.log(`${percentStudent.toFixed(2)}% student tickets.`)
    console.log(`${percentStandart.toFixed(2)}% standard tickets.`)
 	console.log(`${percentKid.toFixed(2)}% kids tickets.`)



}
cinemaTickets(["Taxi",
"10",
"standard",
"kid",
"student",
"student",
"standard",
"standard",
"End",
"Scary Movie",
"6",
"student",
"student",
"student",
"student",
"student",
"student",
"Finish"])
