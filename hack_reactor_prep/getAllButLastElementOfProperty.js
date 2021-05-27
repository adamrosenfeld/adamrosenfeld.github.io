function getAllButLastElementOfProperty(obj, key) {
    if (obj[key] === undefined) {
      return [];
    }
    if (Array.isArray(obj[key]) === false) {
      return [];
    }
    if (obj[key].length === 0) {
      return [];
    }
    obj[key].pop();
    return obj[key];
  }