function parsingJSON(text){
    let obj = JSON.parse(text);

    let objEntries = Object.entries(obj);
    for (const [key, value] of objEntries) {
        console.log(`${key}: ${value}`);
    }

}
parsingJSON('{"name": "George", "age": 40, "town": "Sofia"}')