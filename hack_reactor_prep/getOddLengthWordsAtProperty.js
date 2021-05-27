function getOddLengthWordsAtProperty(obj, key) {
    if (obj[key] === []) {
      return [];
    }
    if (Array.isArray(obj[key]) === false) {
      return [];
    }
    if (obj[key] === undefined) {
      return [];
    }
    var result = [];
    for (var i = 0; i < obj[key].length; i++) {
      if (obj[key][i].length % 2 === 1) {
        result.push(obj[key][i])
      } 
    }
    return result;
  }