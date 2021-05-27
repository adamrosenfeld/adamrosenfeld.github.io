function getSmallestElementAtProperty(obj, key) {
    if (obj[key] === undefined) {
      return undefined;
    }
    if (Array.isArray(obj[key]) === false) {
      return undefined;
    }
    if (obj[key].length === 0) {
      return undefined;
    }
     var smallest = obj[key][0];
       for (var i = 1; i < obj[key].length; i++) {
         if (obj[key][i] < smallest) {
           smallest = obj[key][i];   
       }
     }
     return smallest;
   }