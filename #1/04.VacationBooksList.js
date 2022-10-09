function vacationBooksList(input){

    let pageInBook = Number(input[0]);
    let pageForHour = Number(input[1]);
    let days = Number(input[2]);

    let hours = pageInBook/pageForHour;
    let hoursForDays = hours/days;
    
    console.log(hoursForDays);

}
vacationBooksList(["212" , "20" , "2"])
