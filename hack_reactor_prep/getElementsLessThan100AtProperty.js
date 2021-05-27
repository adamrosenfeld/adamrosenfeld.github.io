function getElementsLessThan100AtProperty(obj, key) {
    if (obj[key] === undefined) {
      return  [];
    }
    if (Array.isArray(obj[key]) === false) {
      return  [];
    }
    if (obj[key].length === 0) {
      return [];
    }
    var result = [];
    for (var i = 0; i < obj[key].length; i++) {
      if (obj[key][i] < 100) {
        result.push(obj[key][i]);
      }
    }
    return result;
    }