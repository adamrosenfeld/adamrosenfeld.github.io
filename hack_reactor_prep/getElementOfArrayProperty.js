function getElementOfArrayProperty(obj, key, index) {
    if (obj[key] === undefined) {
        return undefined;
    }
    if (Array.isArray(obj[key]) === false) {
        return undefined;
    }
    if (obj[key].length === 0) {
        return undefined;
    }
    return obj[key][index];
  }