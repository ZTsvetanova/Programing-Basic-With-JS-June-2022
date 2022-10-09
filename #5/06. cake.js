function cake(input) {

    let index = 0;
    let h = Number(input[index]);
    index++;
    let l = Number(input[index]);
    index++;
    let allPiece = Number(h * l);
    let word = input[index];
    let piece = 0;

    while (word !== "STOP") {
        piece = Number(word);
        if (piece > allPiece) {
            let diff = Math.abs(piece - allPiece);
            console.log(`No more cake left! You need ${diff} pieces more.`)
            break;
        }
        allPiece -= piece;
        index++;
        word = input[index]
        }
    
        if(word === "STOP")
        {console.log(`${allPiece} pieces are left.`)}
}

cake (["10",
"10",
"20",
"20",
"20",
"20",
"21"])


