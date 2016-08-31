/**
 * @param {Integer[]} list List of integers
 * @returns {Integer} The most frequently occuring integer from the list
 */

const arr = [1, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,];

const tally = (acc, x) => {

  if (! acc[x]) {
    acc[x] = 1;
    return acc;
  }

  acc[x] += 1;
  return acc;
};

const totals = arr.reduce(tally, {});

const keys = Object.keys(totals);

const values = keys.map(x => totals[x]);

const results = keys.filter(x => totals[x] === Math.max(...values));
console.log('RESULTS', results)