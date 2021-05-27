function getProductOfAllElementsAtProperty(obj, key) {
    if (obj[key] === undefined) {
      return 0;
    }
    if (Array.isArray(obj[key]) === false) {
      return 0;
    }
    if (obj[key].length === 0) {
      return 0;
    }
    var product = 1;
    for (var i = 0; i < obj[key].length; i++) {
       product *= obj[key][i];
    }
  return product;
  }