function DNA(dna) {
  return dna
    .concat("||TACG")
    .replace(/[aA](?=.*?(T))|[tT](?=.*?(A))|[cC](?=.*?(G))|[gG](?=.*?(C))|\|\|....$/g, "$1$2$3$4");
}