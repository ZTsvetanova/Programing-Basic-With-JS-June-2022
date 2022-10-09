function oldBooks(input) {

    let firstBook = input[0];
    let index = Number(1);
    let book = input[index];
    let count = Number(0);

    while ("No More Books" !== book) {
        thisBook = input[book];
        
        if (firstBook === book) {
            break;
        }
        count++;
        index++;
        book = input[index];

    }
    if (firstBook !== book) {
        console.log(`The book you search is not here!`)
        console.log(`You checked ${count} books.`)
    } else {
        console.log(`You checked ${count} books and found it.`)
    }
}
oldBooks(["The Spot",
"Hunger Games",
"Harry Potter",
"Torronto",
"Spotify",
"No More Books"])
