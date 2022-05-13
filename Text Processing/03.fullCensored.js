function censored(text, word){

    let fullCensored = "*".repeat(text.length);

    let withoutSpaces = "";
    for (ch of text) {
       if (ch !== " ") {
           withoutSpaces += "*";
       }else{
           withoutSpaces += " ";
       }
    }
    console.log(withoutSpaces);
}
censored('A small sentence with some words', 'small');