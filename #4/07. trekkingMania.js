function trekkingMania(input){

    let index = 0;
    let groups = Number(input[index]);
    index++;
    let musala = 0;
    let monblan = 0;
    let kilimandjaro = 0;
    let kTwo = 0;
    let everest = 0;
    let allPeople = 0;

    for(let i = 1; groups>=i; i++){
        let people = Number(input[index]);
        allPeople +=people;
        if(people<=5){
            musala += people
        }else if(people>=6 && people<=12){
            monblan += people
        }else if(people>=13 && people<=25){
            kilimandjaro +=people
        }else if(people>=26 && people<=40){
            kTwo += people
        }else{
            everest += people
        }
        index++
    }
    let percentMusala = Number(musala/allPeople*100);
    let percentMonblan = Number(monblan/allPeople*100);
    let percentKilimadjaro = Number(kilimandjaro/allPeople*100);
    let percentKTwo = Number(kTwo/allPeople*100);
    let percentEverest = Number(everest/allPeople*100);

    console.log(`${percentMusala.toFixed(2)}%`);
    console.log(`${percentMonblan.toFixed(2)}%`);
    console.log(`${percentKilimadjaro.toFixed(2)}%`);
    console.log(`${percentKTwo.toFixed(2)}%`);
    console.log(`${percentEverest.toFixed(2)}%`);
}
trekkingMania(["10",
"10",
"5",
"1",
"100",
"12",
"26",
"17",
"37",
"40",
"78"])
