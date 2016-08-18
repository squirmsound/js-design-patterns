// @flow

// Functions
// Functions take zero or more arguments and optionally return a value. In addition to “standard” function declarations, Flow supports arrow functions, async functions, and generator functions.

function greatestCommonDivisor(a: number, b: number): number {
  if (!b) {
    return a;
  }

  return greatestCommonDivisor(b, a % b);
}

// Annotations included for example purposes only.
[1, 2, 3].map((num: number): number => num * 2)

async function getFriendNames(
  friendIDs: Promise<number[]>,
  getFriendName: (id: number) => Promise<string>,
): Promise<string[]> {
  const ids = await friendIDs;
  const names = await Promise.all(ids.map(getFriendName));
  return names;
}

function *infinity(): Generator<number,void,void> {
  let n = 0;
  while (true) {
    yield n++;
  }
}
