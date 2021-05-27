function keep(array, keeper) {
    var result = [];
    for (var i = 0; i < array.length; i++) {
      if (array[i] === keeper) {
      result.push(array[i]); 
      }  
    } 
  return result;
  }