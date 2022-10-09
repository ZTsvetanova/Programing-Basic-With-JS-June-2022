function projectsCreation(input) {
    let name = (input[0]);
    let numberOfProjects = Number(input[1]);
    let hours = numberOfProjects * 3;

   // console.log (name);
   // console.log (numberOfProjects);
   //console.log (hours);



console.log(`The architect ${name} will need ${hours} hours to complete ${numberOfProjects} project/s.`);

}
projectsCreation(["Tsvetanova" , "10"]);
