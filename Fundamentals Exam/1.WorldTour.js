function worldTour(input){
    let stops = input.shift();

    let line = input.shift();
    while(line !== 'Travel'){
        let [command, ...rest] = line.split(':');
        switch(command.trim()){
            case 'Add Stop':
                let index = Number(rest[0]);
                let string = rest[1];
                 if(index >= 0 && index <= stops.length){
                     let before = stops.substring(0, index);
                     let after = stops.substring(index);
                     stops = before.concat(string).concat(after);  
                 }
            break;
            case 'Remove Stop':
                let startIndex = Number(rest[0]);
                let endIndex = Number(rest[1]);
                if(startIndex >= 0 && startIndex < stops.length && endIndex >= 0 && endIndex < stops.length){
                    let before = stops.substring(0, startIndex);
                    let after = stops.substring(endIndex + 1);
                    stops = before + after;
                }
            break;
            case 'Switch':
                let oldString = rest[0];
                let newString = rest[1];
                let regex = new RegExp(oldString, 'g');
                stops = stops.replace(regex, newString);

            break;
            default:
            break;
        }
        console.log(stops);
        line = input.shift();
        
    }
    console.log(`Ready for world tour! Planned stops: ${stops}`);

}
worldTour((["Hawai::Cyprys-Greece",
"Add Stop:7:Rome",
"Remove Stop:11:16",
"Switch:Hawai:Bulgaria",
"Travel"])
);