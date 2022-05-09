function addSub(arr) {
  let newArr = [];
  let sumNewArr = 0;
  let sumOldArr = 0;
  let arrLength = arr.length;

  for (let i = 0; i < arrLength; i++) {
    let currentNum = arr[i];
    let newNumber = 0;

    if (currentNum % 2 === 0) {
      newNumber = currentNum + i; 
    } else {
      newNumber = currentNum - i;
    }
    newArr.push(newNumber);
    sumOldArr += currentNum;
    sumNewArr += newNumber;
  }
  console.log(newArr);
  console.log(sumOldArr);
  console.log(sumNewArr);
}
addSub([5, 15, 23, 56, 35]);
