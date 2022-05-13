function thePianist(input){

    let numberOfPieces = input.shift();
    input.pop();

    let piecesThemselvs = [];

    for(let line of input){
        // for(let i = 0; i < numberOfPieces; i++){
            let pieces = line.split('|');
            console.log(pieces);
            
            
        //}
        
    
    }
    
    
}
thePianist([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'  
  ]
  );