let stockList = (listOfStock, listOfCategories) => {
  let total = {};
  let result = "";

  listOfCategories.forEach(letter => {
    const regex = new RegExp(`^(${letter}).*\\s(\\d+)`);
    listOfStock.forEach(code => {
      const match = regex.exec(code);
      if (match) {
        total[match[1]] = (total[match[1]] || 0) + parseInt(match[2]);
      } else {
        total[letter] = total[letter] || 0;
      }
    });
  });

  for (let key in total) {
    result += `(${key} : ${total[key]}) - `;
  }

  return result.slice(0, -3);  // Remove the last ' - '
}

const b = ["ABAR 200", "CDXE 500", "BKWR 250", "BTSQ 890", "DRTY 600"];
const c = ["Q", "A", "B"];
console.log(stockList(b, c));  // Output: (A : 200) - (B : 1140)

