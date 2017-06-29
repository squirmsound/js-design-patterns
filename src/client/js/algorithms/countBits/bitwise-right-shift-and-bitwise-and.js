function countBits(n) {
  for(c=0;n;n>>=1)c+=n&1
  return c;
}

// It uses bitwise right shift and bitwise AND.

// n & 1: The bitwise AND operation is used to get the number's least significant binary bit (the 1's place of the binary number). That's added to c with the += operator.

// Next, the number is shifted to the right once with the >>= operator (note: it should've been >>>=; see my post below) so a different bit moves into the 1's place.

// It continues doing that as long as the number isn't 0. Once it's 0, all of the "1" bits in it have been shifted into the 1's place and added to c, and returns c.