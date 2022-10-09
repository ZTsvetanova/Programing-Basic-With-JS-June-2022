function hotelRoom(input){

    let month = input[0];
    let numberOfNoses = Number(input[1]);
    let priceApartment = 0;
    let priceStudio = 0;

    switch(month){
        case "May":
        case "October":
            priceApartment = 65*numberOfNoses;
            priceStudio = 50*numberOfNoses;

            if(numberOfNoses>14){
                priceStudio=priceStudio*0.70;
            }else if(numberOfNoses<14 && numberOfNoses>7){
                priceStudio=priceStudio*0.95;
            }
            break;
        case "June":
        case "September":
            priceApartment = 68.70*numberOfNoses;
            priceStudio = 75.20*numberOfNoses;
            if(numberOfNoses>14){
                priceStudio=priceStudio*0.80;
            }
            break;
        case "July":
        case "August":
            priceApartment = 77*numberOfNoses;
            priceStudio = 76*numberOfNoses;
            break;
    }

    if(numberOfNoses>14){
        priceApartment=priceApartment*0.90;
    }
    priceApartment = priceApartment.toFixed(2);
    priceStudio = priceStudio.toFixed(2);

    console.log(`Apartment: ${priceApartment} lv.`)
    console.log(`Studio: ${priceStudio} lv.`)
}
hotelRoom(["May",
"15"])
