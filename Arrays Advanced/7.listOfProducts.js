function demo(input){

    let arr = input;
    let sortedArr = arr.sort((a,b)=>{
       return a.localeCompare(b);
      
    })
    let arrL = arr.length;
    for (i = 0; i < arrL; i++){
        currEl = arr[i];
        console.log(`${i+1}.${currEl}`);
    }
}
demo([
'Potatoes', 
'Tomatoes', 
'Onions', 
'Apples']);