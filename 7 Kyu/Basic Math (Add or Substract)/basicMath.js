/* function calculate(str) {
    const expr = str.replace(/plus/g, '+').replace(/minus/g, '-');
    return eval(expr).toString();
} */

function calculate(str) {
  return str
    .split(/plus|minus/)
    .map(Number)
    .reduce((acc, num, i) =>
      str.match(/plus|minus/g)?.[i - 1] === 'minus' ? acc - num : acc + num
    )
    .toString();
}

console.log(calculate("1plus2plus3plus4"));  // "10"
console.log(calculate("1plus2plus3minus4")); // "2"
