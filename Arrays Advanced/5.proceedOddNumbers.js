function demo(input){

    let arr = input;

    let filtredArr = arr.filter((el, index)=>{
        if(index % 2 !== 0){
            return index;
        }
        
         
    })
    
    
    let newArr = filtredArr.map((el)=>{
        return el*2
        
    });
    console.log(newArr.reverse().join(' '));

}
demo([3, 0, 10, 4, 7, 3]);