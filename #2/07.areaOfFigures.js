function areaOfFigures(input){

    let figure = (input[0]);
    let firstSide = Number(input[1]);
    let secondSide = Number(input[2]);

    let faceOfSquare = firstSide*firstSide;
    let faceOfRectangle = firstSide*secondSide;
    let faceOfCircle = Math.PI*(firstSide*firstSide);
    let faceOfTriangle = (firstSide*secondSide)/2;

    if(figure==="square"){
        console.log(faceOfSquare.toFixed(3))
    } else if(figure==="rectangle"){
        console.log(faceOfRectangle.toFixed(3))
    } else if(figure==="circle") {
        console.log(faceOfCircle.toFixed(3)) }
     else if(figure==="triangle") {
           console.log(faceOfTriangle.toFixed(3))
     }

}
areaOfFigures (["circle",
"6"])
