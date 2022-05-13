function theRace(input) {
  let text = input;
  let reg = /(\#|\$|\%|\*|\&)([A-Za-z]+)\1=(\d+)!!([A-Za-z0-9]+)/g;

  let validMatches = [];
  let arrWithNewSymbols = [];
  let newStr = [];

  let matches = reg.exec(text);

  for (let line of text) {
     if (line !== matches[0]) {
      console.log("Nothing found!");
      
    } else if (line === matches[0]) {
      let length = Number(matches[3]);
      let symbols = matches[4];
      if(length = symbols.length){
        arrWithNewSymbols.push(symbols)

      }


      }
      //for (let i = 0; i < matches.length; i++) {
        //let currentMatch = matches[0];
        //let name = matches[2];
        
        validMatches.push(line);
        
        let length = Number(matches[3]);
        let symbols = matches[4];

        //if (symbols === length) {
          for (let symbol of symbols) {
            let char = symbol.charCodeAt();
            let newChar = length + char;
            newStr.push(newChar);
            //let string = symbols.fromCharCode(newStr);

            // let newSymbols = currentCount.fromCharCode();
            // arrWithNewSymbols.push(newSymbols);
          }
        //}
      //}
    }
  //}
  //console.log(currentCount);
  console.log(validMatches);
}
theRace([
  "%GiacomoAgostini%=7!!hbqw",
  "&GeoffDuke*=6!!vjh]zi",
  "JoeyDunlop=10!!lkd,rwazdr",
  "Mike??Hailwood=5!![pliu",
  "#SteveHislop#=16!!df%TU[Tj(h!!TT[S",
]);
