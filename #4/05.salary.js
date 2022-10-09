function salary (input) {

    let n = Number(input[0]);
    let salary = Number(input[1]);
    let index = 2;
    
   
    //let sanction = Number(0);


    for(let count = 1; count<=n; count++){
        let site = (input[index]);
        switch(site){
            case "Facebook":
                salary -= 150;
                break;
            case "Instagram":
                salary -= 100;
                break;
            case "Reddit":
                salary -= 50;
                break;
            default:
                break;
        } 
        index++;
        
        }
        
    
    if(salary<=0){
        console.log(`You have lost your salary.`)
    }else{
        console.log(`${salary}`)
    }
}
salary(["3",
"500",
"Facebook",
"Stackoverflow.com",
"softuni.bg"])


