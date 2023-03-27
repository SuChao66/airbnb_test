/**
 * 将style字符串转换成一个对象
 * @param {*} str style字符串
 * @returns 
 */
function styleStrToObject(str) {
  const obj = {}

  const s = str.toLowerCase().replace(/-(.)/g, function (m, g) {
    return g.toUpperCase();
  }).replace(/;\s?$/g,"").split(/:|;/g);

  for (var i = 0; i < s.length; i += 2) {
      obj[s[i].replace(/\s/g,"")] = s[i+1].replace(/^\s+|\s+$/g,"");
  }
  return obj;
}

export {
  styleStrToObject
}