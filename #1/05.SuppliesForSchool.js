function suppliesForSchool(input){

    let packagePens = 5.80;
    let packageMarkers = 7.20;
    let boardCleaner = 1.20;

    let pens = Number(input[0]);
    let markers = Number(input[1]);
    let cleaner = Number(input[2]);
    let percentDiscount = Number(input[3]);

    let discount = percentDiscount/100;

    let sumPens = packagePens*pens;
    let sumMarkers = packageMarkers*markers;
    let sumCleaner = boardCleaner*cleaner;
    let sumWithouthDiscount = sumCleaner+sumMarkers+sumPens;
    let sum = sumWithouthDiscount - (sumWithouthDiscount*discount);

    console.log(sum);

}

suppliesForSchool(["2" , "3" , "4" , "25"])