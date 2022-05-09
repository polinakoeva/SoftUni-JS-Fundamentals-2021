function printResult(first, second){

    let firstSymbolAsNumber = first.charCodeAt(0);
    let secondSumbolAsNumber = second.charCodeAt(0);
    let smallerNumber = Math.min(firstSymbolAsNumber, secondSumbolAsNumber);
    let biggerNumber = Math.max(firstSymbolAsNumber, secondSumbolAsNumber);
    let result = [];

    for(let i = smallerNumber + 1; i < biggerNumber; i++){
       let currentElement = String.fromCharCode(i);
        result.push(currentElement);
    }
    console.log(result.join(' '));
    
}
printResult('a','d');