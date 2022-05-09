function evenOddSub(arr) {
    let sumEven = 0;
    let sumOdd = 0;

    for (let unparsed of arr) {
        let number = Number(unparsed);

        if (number % 2 === 0) {
            sumEven += number;
        } else {
            sumOdd += number;
        }
        
    }
    let diff = sumEven - sumOdd;
    console.log(diff);
}
evenOddSub([1, 2, 3, 4, 5, 6]);