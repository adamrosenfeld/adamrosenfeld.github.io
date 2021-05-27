function getEvenElementsAtProperty(obj, key) {
    if (obj[key] === undefined) {
      return [];
    }
    if (Array.isArray(obj[key]) === false) {
      return [];
    }
    if (obj[key].length === 0) {
      return [];
    }
    var evenElements = [];
    for (var i = 0; i < obj[key].length; i++) {
      if (obj[key][i] % 2 === 0) {
        evenElements.push(obj[key][i]);
      }
    }
    return evenElements;
  }