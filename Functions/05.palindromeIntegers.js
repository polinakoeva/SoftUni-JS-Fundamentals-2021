function printResult(input) {
  let arrOfNumbers = input;
  let inputL = arrOfNumbers.length;
  const isPalindrome = (num) => {
    let startNum = num;
    let reversedNum = Number(num.toString().split("").reverse().join(""));
    if (startNum === reversedNum) {
      return "true";
    } else {
      return "false";
    }
  };

  for (i = 0; i < inputL; i++) {
    let currentNumber = arrOfNumbers[i];
    console.log(isPalindrome(currentNumber));
  }
}
printResult([123, 323, 421, 121]);
