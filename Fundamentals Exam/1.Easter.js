function easter(input) {
  let string = input.shift();
  input.pop();

  for (let command of input) {
    let currentCommand = command.split(" ");

    if (currentCommand[0] === "Replace") {
      let currentChar = currentCommand[1];
      let newChar = currentCommand[2];
      string = string.split(currentChar).join(newChar);
      //string = string.replaceAll(currentChar, newChar);
      console.log(string);
    } else if (currentCommand[0] === "Remove") {
      let substr = currentCommand[1];

      let regex = new RegExp(substr, 'g');
      string = string.replace(regex, '');

      // let index = string.indexOf(substr);
      // let part = string.substring(index, index + substr.length);
      // string = string.replace(part, "");
      console.log(string);
    } else if (currentCommand[0] === "Includes") {
      let text = currentCommand[1];
      if (string.includes(text)) {
        console.log("True");
      } else {
        console.log("False");
      }
    } else if (currentCommand[0] === "Change") {
      let lowerOrUpper = currentCommand[1];
      if (lowerOrUpper === "Lower") {
        string = string.toLowerCase();
      } else if (lowerOrUpper === "Upper") {
        string = string.toUpperCase();
      }
      console.log(string);
    } else if (currentCommand[0] === "Reverse") {
      let startIndex = Number(currentCommand[1]);
      let endIndex = Number(currentCommand[2]);
      let substring = string.split('').slice(startIndex, endIndex + 1);
      substring = substring.reverse().join('');
      // let substring = string.substring(startIndex, endIndex + 1);
      // substring = substring.split("").reverse().join("");
      console.log(substring);
    }
  }
}
easter(['Easterbscomming',
'Replace b I',
'Remove commIng',
'Change Upper',
'Reverse 0 5',
'Easter']);
