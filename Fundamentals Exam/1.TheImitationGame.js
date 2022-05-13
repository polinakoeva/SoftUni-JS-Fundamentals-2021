function theImitationGame (input){

    let message = input.shift();
    input.pop();
    
    for (let line of input){
        let command = line.split('|');
        let currentCommand = command[0];

        if(currentCommand === 'ChangeAll'){
            message = message.replaceAll(command[1], command[2]); 
               
        }else if(currentCommand === 'Insert'){

            let value = command[2];
            let index = command[1];

            let firstPart = message.substring(0,index);
            let secondPart = message.substring(index);
            message = firstPart.concat(value).concat(secondPart);
            
             
        }else if(currentCommand === 'Move'){
            let firstThree = message.slice(0,command[1]);
            let last = message.slice(command[1]);
            message = last + firstThree;
        }
    }  
    console.log(`The decrypted message is: ${message}`)         
             
}
theImitationGame([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode',
  ]);