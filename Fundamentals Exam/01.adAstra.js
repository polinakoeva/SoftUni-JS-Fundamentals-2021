function adAstra(input) {
  let reg =
    /(\||\#)(?<name>[A-Za-z\s]+)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d{1,5})\1/g;
  let string = input[0];

  let count = 0;
  let items = [];
  let matches = reg.exec(string);

  while (matches) {
    items.push({ item: matches[2], date: matches[3], calories: matches[4] });
    count += Number(matches[4]);
    matches = reg.exec(string);
  }
  let days = Math.floor(count / 2000);

  console.log(`You have food to last you for: ${days} days!`);

  // for(let item of items){
  //     console.log(`Item: ${item.item}, Best before: ${item.date}, Nutrition: ${item.calories}`)

  // }    !!!Може да се реши и с трите цикъла.

  // items.forEach(el => {
  //     console.log(`Item: ${el.item}, Best before: ${el.date}, Nutrition: ${el.calories}`)

  // })

  for (let i = 0; i < items.length; i++) {
    let currentItem = items[i];
    console.log(
      `Item: ${currentItem.item}, Best before: ${currentItem.date}, Nutrition: ${currentItem.calories}`
    );
  }
}
adAstra([
  "#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|",
]);
