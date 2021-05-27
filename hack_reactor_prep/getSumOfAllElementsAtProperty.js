function getSumOfAllElementsAtProperty(obj, key) {
    if (obj[key] === undefined) {
      return 0;
    }
    if (Array.isArray(obj[key]) === false) {
      return 0;
    }
    if (obj[key].length === 0) {
      return 0;
    }
    var sum = 0;
    for (var i = 0; i < obj[key].length; i++) {
      sum += obj[key][i];
    }
    return sum;
  }