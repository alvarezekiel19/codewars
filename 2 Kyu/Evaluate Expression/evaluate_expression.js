const exprOne = input => recOne(exprTwo(input));

const recOne = ({s: input, v: a}) => {
  if (input.length > 0 && input[0] == '+' || input[0] == '-') {
    const {s, v} = exprTwo(input.substr(1));
      return recOne({s, v: input[0] == '+' && a + v || a - v});
  }
  return {s: input, v: a};
};

const exprTwo = input => recTwo(exprThree(input));

const recTwo = ({s: input, v: a}) => {
  if (input.length > 0 && input[0] == '*' || input[0] == '/') {
      const {s, v} = exprThree(input.substr(1));
      return recTwo({s, v: input[0] == '*' && a * v || a / v});
  }
  return {s: input, v: a};
};

const exprThree = input => {
  if (input[0] == '-') {
    const {s, v} = exprFour(input.substr(1));
    return {s, v: -v};
  }
  return exprFour(input);
};

const exprFour = input => {
  if (input[0] == '(') {
      const {s, v} = exprOne(input.substr(1));
      if (s[0] == ')') {
        return {s: s.substr(1), v};
      }
  }
  if (chkDigit(input[0])) {
      return number(input);
  }
};

const chkDigit = c => c >= '0' && c <= '9';

const number = input => {
  let j = 0;
  let k = 0;
  let h = 0;
  let g = 0;
  while (chkDigit(input[j])) {
      k = k * 10 + (input[j] - '0');
      j += 1;
  }
  if (input[j] == '.') {
    h = 1;
    let m = .1;
    while (chkDigit(input[j + h])) {
      g += m * (input[j + h] - '0');
      m *= .1;
      h += 1;
    } 
  }
  return {s: input.substr(j + h), v: k + g};
}

const calc = e => exprOne(e.replace(/ /g, '')).v;
