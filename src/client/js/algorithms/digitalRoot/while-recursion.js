function digitalRoot(n) {
  while (n.toString().length >= 2) {
    n = n.toString().split('').reduce((p, c) => Number(p) + Number(c));
  }
  return n;
}