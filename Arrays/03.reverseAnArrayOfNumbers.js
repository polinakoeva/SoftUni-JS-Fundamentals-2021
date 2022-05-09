function reverseArray (num, arr){
    let newArr = [];
    for (let i = 0; i < num; i++){
        newArr.push(arr[i]); 
    }
    
    let revArr = [];
    for (let i = newArr.length - 1; i >= 0; i--){
        revArr.push(newArr[i]);
    }
    console.log(revArr.join(' '));
}
reverseArray(3, [10, 20, 30, 40, 50]);