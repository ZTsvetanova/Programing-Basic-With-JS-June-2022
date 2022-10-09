function password(input){

    let name = input[0];
    let pass = input[1];
    let index = 2;
    let word = "";

    while(word !== pass){
        word = input[index];
        if(word === pass){
            console.log(`Welcome ${name}!`)
            break;
        }
        index++;
    }

}
password(["Nakov",
"1234",
"Pass",
"1324",
"1234"])
