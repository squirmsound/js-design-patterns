const TokenType = {
  Token : 'token',
  Separator : 'separator'
}

String.prototype.toPascalCase = function () {
  let value = this;
  if (!value) {
    return value;
  }

  if (value.length === 1) {
    return value.toUpperCase();
  }

  return value.substring(0, 1).toUpperCase() + value.substring(1).toLowerCase();
}


function* tokenize(sentence, separatorsRegex) {
  let tokens = sentence.split(separatorsRegex).filter(token => token !== "");

  for (var i = 0; i < tokens.length; i++) {

    yield {
      type: TokenType.Token,
      value: tokens[i]
    }

    i++;

    if (i === tokens.length) {
      return;
    }

    yield {
      type: TokenType.Separator,
      value: tokens[i]
    }
  }
}

function titleCase(title, minorWords) {
  // tokenize sentence and iterate every token
  let separatorRegex = /([\s,\.]+)/;
  let result = '';
  let isFirstToken = true;
  let exceptions  = minorWords ? minorWords.toLowerCase() : '';

  let exceptionalTokens = Array.from(tokenize(exceptions, separatorRegex));
  let exceptionalWords = exceptionalTokens.filter(token => token.type === TokenType.Token).map(token => token.value);
  for (let token of tokenize(title, separatorRegex)) {
    if (token.type === TokenType.Token && isFirstToken) {
      result += token.value.toPascalCase();
      isFirstToken = false;
    } else if (token.type === TokenType.Token && !isFirstToken && exceptionalWords.indexOf(token.value.toLowerCase()) < 0) {
      result += token.value.toPascalCase();
    } else {
      result += token.value.toLowerCase();
    }
  }

  return result;
}