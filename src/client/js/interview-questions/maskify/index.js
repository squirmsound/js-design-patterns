// return masked string
function maskify(cc) {
  return cc.replace(/.(?=.{4})/g, '#');
}