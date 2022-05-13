function secretChat(input) {
  let message = input.shift();
  input.pop();

  for (let command of input) {
    let currentCommand = command.split(":|:");

    if (currentCommand[0] === "ChangeAll") {
      let substring = currentCommand[1];
      let replacement = currentCommand[2];
      while (message.includes(substring)) {
        let index = message.indexOf(substring);
        let part = message.substring(index, index + substring.length);
        message = message.replace(part, replacement);
        
      }
      console.log(message);
    } else if (currentCommand[0] === "Reverse") {
      let substr = currentCommand[1];
      if (message.includes(substr)) {
        let reversedSubstring = substr.split("").reverse().join("");
        message = message.replace(substr, reversedSubstring);
        console.log(message);
      } else {
        console.log("error");
      }
    } else if (currentCommand[0] === "InsertSpace") {
      let index = currentCommand[1];
      let before = message.substring(0, index);
      let last = message.substring(index);

      message = before + " " + last;
      console.log(message);
    }
  }
  console.log(`You have a new text message: ${message}`);
}
secretChat([
  "heVVodar!gniV",
  "ChangeAll:|:V:|:l",
  "Reverse:|:!gnil",
  "InsertSpace:|:5",
  "Reveal",
]);
