function isIsogram(str){
  return !/(\w).*\1/i.test(str)
}

// Regular expressions use forward slashes to encapsulate what it is we're looking for in the string.
// \w (with a lower case w) means to look for an alphanumeric character
// . represents all other characters while * means zero instances
// What this means is to leave all the other characters alone like digits.
// Finally the 1 means that there should be only 1 instance of each letter.
// The i makes the data analysis case insensitive
// The ! means NOT
// So, to put it all together
// Test the string to see if any LETTER (not other characters) does NOT appear more than once


// This is mostly right but I would like to offer a couple of small corrections:
// * Means to match the preceding expression zero OR MORE times. In this case where it follows '.' it allows for any number of random characters.
// \1 Refers back to your match for the last expression in parentheses. In this case this means the character that matched '(\w)'.
// In total '(\w).*\1' equates to: An alphanumeric character, '\w', followed by any number of random characters, '.*', followed by the same alphanumeric character again, '\1'


// match a single alphabetical character and remember it
//  ||||
//  ||||  case insensitive
//  vvvv     v
// /(\w).*\1/i
//      ^^^^
//      ||++------- try to match the remembered character again
//      ||
//      ||
//      match any amount of any other characters