function sumEvenNums (arr){
    let sum = 0;
    for(let number of arr){
        if (number % 2 === 0){
            sum += Number(number);
        }
      
    }
    console.log(sum);
}
sumEvenNums(['1','2','3','4','5','6']);