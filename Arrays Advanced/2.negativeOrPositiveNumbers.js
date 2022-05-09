function solve(input){
    input = input.map(Number);
    let arr = [];
    for(let element of input){
        if(element >= 0){
            arr.push(element);
        }else{
            arr.unshift(element);
        }
    }
    
    arr.forEach(el => console.log(el));

}
solve(['7', '-2', '8', '9']);