function removeElement(array, discarder) {
    if (array === []) {
      return [];
    }
    var result = [];
    for (var i = 0; i < array.length; i++) {
      if (array[i] !== discarder) {
      result.push(array[i]);   
      }
    }
    return result;
  }