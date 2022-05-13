function destinationMapper(text) {
  let regex = /(\=|\/)([A-Z][A-Za-z]{2,})\1/g;
  let count = 0;
  let destinations = [];

  if (regex.test(text)) {
    let validMatch = text.match(regex);

    validMatch.forEach((destination) => {
      count += destination.length - 2;
      destinations.push(destination.slice(1, destination.length - 1));
    });
  }
  console.log(`Destinations: ${destinations.join(", ")}`);
  console.log(`Travel Points: ${count}`);
}
destinationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");
