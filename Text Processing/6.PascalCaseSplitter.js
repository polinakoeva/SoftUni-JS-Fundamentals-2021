function pascalCaseSplitter(text){
    
    text = text.split('');
    let words = [];

    // text.forEach(el => {

    // })
    
    for (let i = 0; i < text.length; i++){
        let currentChar = text[i];
        
        if(currentChar.charCodeAt(0) > 64 && currentChar.charCodeAt(0) < 91){
            words.push(currentChar);   
        }else if(currentChar.charCodeAt(0) > 96 && currentChar.charCodeAt(0) < 123){
            words[words.length -1] += currentChar;
        }   
    }
    console.log(words.join(', '));   
}
pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');