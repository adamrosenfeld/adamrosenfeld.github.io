function getFirstElementOfProperty(obj, key) {
    if (obj[key] === []) {
      return undefined;
    }
    if (Array.isArray(obj[key]) === false) {
      return undefined;
    }
    if (obj[key].length === 0) {
      return undefined;
    }
    return obj[key].shift();
    }
  