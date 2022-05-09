function addAndSubtract (fNum, sNum, tNum){
    
    function sumOfTwoNumbers (firstNum, secondNum){
        return firstNum + secondNum;   
    }
    let sum = sumOfTwoNumbers(fNum, sNum);

    function subtract (sum, thirdNum){
        return sum - thirdNum;   
    }
    let result = subtract(sum, tNum);

    console.log(result);
}
addAndSubtract(23, 6, 10);
