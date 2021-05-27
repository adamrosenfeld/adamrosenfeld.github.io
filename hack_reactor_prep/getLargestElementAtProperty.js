function getLargestElementAtProperty(obj, key) {
    if (obj[key] === undefined) {
      return undefined;
    }
    if (Array.isArray(obj[key]) === false) {
      return undefined;
    }
    if (obj[key].length === 0) {
      return undefined;
    }
     var largest = obj[key][0];
       for (var i = 1; i < obj[key].length; i++) {
         if (obj[key][i] > largest) {
           largest = obj[key][i];   
       }
     }
     return largest;
   }