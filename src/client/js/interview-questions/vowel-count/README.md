# Vowel Count

## Description
Return the number(count) of vowels in the given string. We will consider a, e, i, o, and u as vowels for this kata.

### Solutions

## Answer
### 1
```
function getCount(str) {
  return (str.match(/[aeiou]/ig)||[]).length;
}
```

### 2
```
 for (var n = 0, i = 0; i < str.length; i++) {
    var c = str.charCodeAt(i)
    if (c === 97 || c === 101 || c === 105 || c === 111 || c === 117) n++
  }

  return n
}