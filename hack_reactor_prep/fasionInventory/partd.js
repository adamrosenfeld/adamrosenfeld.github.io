var result = [];
function generateLaceDetails(inventory) {
  for (var i = 0; i < inventory.length; i++) {  
    for (var j = 0; j < inventory[i].shoes.length; j++) {
      var resultObj = {nameWords: [],}
      resultObj.nameWords = inventory[i].shoes[j].name.split(' ');
      for (var k = 0; k < resultObj.nameWords.length; k++) {
        if (resultObj.nameWords[k].indexOf('lace') > - 1) {
        resultObj.targetWordIndex = k;
        result.push(resultObj)
        }   
      }
    }
  }
  return result;
}
