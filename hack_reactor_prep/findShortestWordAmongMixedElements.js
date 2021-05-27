function findShortestWordAmongMixedElements(arr) {
    if (arr.length === 0) {
      return '';
    }
    var arrOfStrings = [];
    for (var i = 0; i < arr.length; i++) {
      if (typeof arr[i] === 'string') {
        arrOfStrings.push(arr[i]);
      }  
    }
  
    if (arrOfStrings.length === 0) {
        return '';
    }
    
    var shortest = arrOfStrings[0];
    for (var i = 0; i < arrOfStrings.length; i++) {
      if (shortest.length > arrOfStrings[i].length) {
       shortest = arrOfStrings[i];
      }   
    }
    return shortest;
  }
  