function demo(input) {
  let kEl = input.shift();
  let firstLine = input.slice(0, 0 + kEl);
  let inputL = input.length;
  let secondLine = input.slice(inputL - kEl);

  console.log(firstLine.join(" "));
  console.log(secondLine.join(" "));
}

demo([2, 7, 8, 9]);
