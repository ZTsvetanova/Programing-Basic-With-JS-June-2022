function tradeCommissions (input){

    let city = input[0];
    let salesVolume = Number(input[1]);
    let percent = 0;
    let commission = 0;

    if(salesVolume>=0 && salesVolume<=500){
        switch(city){
            case "Sofia":
                percent = 0.05 ;
                commission=(salesVolume*percent).toFixed(2);
                console.log(commission)
                break;
            case "Varna":
                percent = 0.045 ;
                commission=(salesVolume*percent).toFixed(2);
                console.log(commission)
                break;
            case "Plovdiv":
                percent = 0.055 ;
                commission=(salesVolume*percent).toFixed(2);
                console.log(commission)
                break; 
            default:
                console.log(`error`)
                    break   
        } 
    }else if(salesVolume>500 && salesVolume<=1000){
        switch(city){
            case "Sofia":
                percent = 0.07 ;
                commission=(salesVolume*percent).toFixed(2);
                console.log(commission)
                break;
            case "Varna":
                percent = 0.075 ;
                commission=(salesVolume*percent).toFixed(2);
                console.log(commission)
                break;
            case "Plovdiv":
                percent = 0.08 ;
                commission=(salesVolume*percent).toFixed(2);
                console.log(commission)
                break;
            default:
                console.log(`error`)
                    break    
        }
    }else if(salesVolume>1000 && salesVolume<=10000){
        switch(city){
            case "Sofia":
                percent = 0.08 ;
                commission=(salesVolume*percent).toFixed(2);
                console.log(commission)
                break;
            case "Varna":
                percent = 0.10 ;
                commission=(salesVolume*percent).toFixed(2);
                console.log(commission)
                break;
            case "Plovdiv":
                percent = 0.12 ;
                commission=(salesVolume*percent).toFixed(2);
                console.log(commission)
                break;
            default:
                console.log(`error`)
                    break  
        } 
    }else if(salesVolume>10000){
        switch(city){
            case "Sofia":
                percent = 0.12 ;
                commission=(salesVolume*percent).toFixed(2);
                console.log(commission)
                break;
            case "Varna":
                percent = 0.13 ;
                commission=(salesVolume*percent).toFixed(2);
                console.log(commission)
                break;
            case "Plovdiv":
                percent = 0.145 ;
                commission=(salesVolume*percent).toFixed(2);
                console.log(commission)
                break;
            default:
                console.log(`error`)
                    break    
        }   
    }else if(salesVolume<0){
        console.log(`error`)
    }    
   
}

tradeCommissions(["Plovdiv",
"499.99"])

