function fancyBarcodes(input){
    
    const reg = /(@#+)([A-Z][A-Za-z0-9]{4,}[A-Z])\1/g;
    const digitReg = /\d/g;

    input.shift();

    input.forEach(barcode => {
        if(reg.test(barcode)){
            const productGroup = [...barcode]
            .filter(char => digitReg.test(char))
            .join('');
            
            if(productGroup.length > 0){
                console.log(`Product group: ${productGroup}`);
            }else{
                console.log(`Product group: 00`);
            }
        }else{
            console.log("Invalid barcode")
        }
    });    
}
    
fancyBarcodes([
"3",
"@#FreshFisH@#",
"@###Brea0D@###",
"@##Che4s6E@##"]);