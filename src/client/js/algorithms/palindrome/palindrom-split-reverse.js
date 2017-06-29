/**
 * @module src/is-palindrome
 * @license MIT Copyright 2015 Daniel Imms (http://www.growingwiththeweb.com)
 */
'use strict';

/**
 * Determines whether a string is a palindrome.
 * @param {string} text The string to check.
 * @returns {boolean} Whether the string is a palindrome.
 */

function checkPalindrom(str) {
  return str == str.split('').reverse().join('');
}