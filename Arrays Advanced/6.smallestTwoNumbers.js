function demo(input){

    let arr = input;
    let newArr = arr.sort((a,b)=>{
        return a-b;
    });
    let result = newArr.slice(0,2);
    console.log(result.join(' '));

}
demo([30, 15, 50, 5]);