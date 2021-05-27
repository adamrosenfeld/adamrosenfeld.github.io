function getNthElementOfProperty(obj, key, n) {
    if (obj[key] === []) {
      return undefined;
    }
    if (Array.isArray(obj[key]) === false) {
      return undefined;
    }
    if (obj[key] === undefined) {
      return undefined;
    }
    return obj[key][n];
  }
  