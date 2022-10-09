function oscarsCeremony(input){

    let hallRent = Number(input[0]);
    let statuette = hallRent - (hallRent*0.3);
    let catering = statuette - (statuette*0.15);
    let sound = catering / 2;
    let sum =(hallRent + statuette + catering + sound);

    
    console.log(sum);
}
oscarsCeremony(["5555"])