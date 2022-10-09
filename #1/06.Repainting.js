function repainting(input){

    let priceProtectiveNylon = 1.50 //за кв.метър
    let pricePaint = 14.50 //за кв.метър
    let pricePaintThinner = 5 //за литър

    let needingNylon = Number(input[0]);
    let needingPaint = Number(input[1]);
    let needingThinner = Number(input[2]);
    let needingHours = Number(input[3]);


    let allNeedingNylon = needingNylon + 2;
    let allNeedingPaint = needingPaint * 1.1;

    let sumNylon = allNeedingNylon*priceProtectiveNylon;
    let sumPaint = allNeedingPaint*pricePaint;
    let sumThinner = pricePaintThinner*needingThinner;
    let sumMaterials = sumNylon + sumPaint + sumThinner + 0.4;
    let sumForHours = sumMaterials*0.3;
    let sumForWork = sumForHours*needingHours;
    let sum = sumForWork + sumMaterials;
    console.log(sum);

    
}
repainting(["10" , "11" , "4" , "8"])
