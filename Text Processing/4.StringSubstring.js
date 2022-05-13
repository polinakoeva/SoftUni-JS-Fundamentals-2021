function stringSubstring(word, text){

    let sentence = text.toLowerCase();
    let wordToLower = word.toLowerCase();
    let sentenceArr = sentence.split(' ');

    if(sentenceArr.includes(wordToLower)){
        console.log(wordToLower);
    }else{
        console.log(`${wordToLower} not found!`)
    }
}
stringSubstring('javascript',
'JavaScript is the best programming language'
);