const wave = string =>
  [...string].map((s, i) => string.slice(0, i) + s.toUpperCase() + string.slice(i + 1)).filter(x => x != string);
