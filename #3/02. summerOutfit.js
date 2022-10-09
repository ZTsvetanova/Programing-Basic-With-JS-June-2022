function summerOutfit (input){

    let degrees = Number(input[0]);
    let partOfDay = input[1];
    let outFit = 0;
    let shoes = 0;

    if(degrees>=10 && degrees<=18){
        switch(partOfDay){
            case "Morning":
                outFit = "Sweatshirt";
                shoes = "Sneakers";
                break;
            case "Afternoon":
                outFit = "Shirt";
                shoes = "Moccasins";
                break;
            case "Evening":
                outFit = "Shirt";
                shoes = "Moccasins";
                break;
        }

    }else if(degrees>18 && degrees<=24){
        switch(partOfDay){
            case "Morning":
                outFit = "Shirt";
                shoes = "Moccasins";
                break;
            case "Afternoon":
                outFit = "T-Shirt";
                shoes = "Sandals";
                break;
            case "Evening":
                outFit = "Shirt";
                shoes = "Moccasins";
                break;
        }
    }else if(degrees>=25){
        switch(partOfDay){
            case "Morning":
                outFit = "T-Shirt";
                shoes = "Sandals";
                break;
            case "Afternoon":
                outFit = "Swim Suit";
                shoes = "Barefoot";
                break;
            case "Evening":
                outFit = "Shirt";
                shoes = "Moccasins";
                break;
        }
    }
    console.log(`It's ${degrees} degrees, get your ${outFit} and ${shoes}.`)
    
}
summerOutfit(["16",
"Morning"])
