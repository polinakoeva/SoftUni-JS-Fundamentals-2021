function substring(text, start, count) {
  let str = text;
  let sub = str.substring(start, start + count);
  console.log(sub);
}
substring('ASentence', 1, 8);
