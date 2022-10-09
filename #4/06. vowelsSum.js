function vowelsSum (input){

    
    let text=input[0];
    let sum = Number(0);

    for(i=0; i<text.length; i++){
        let letter = text[i];
        switch(letter){
            case "a":
                letter = Number(1);
                break;
            case "e":
                letter = Number(2);
                break;
            case "i":
                letter = Number(3);
                break;
            case "o":
                letter = Number(4);
                break;
            case "u":
                letter = Number(5);
                break;
            default:
                letter = Number(0);
        }
        sum +=letter;

        
    }

    console.log(sum)

}
vowelsSum(["hello"])