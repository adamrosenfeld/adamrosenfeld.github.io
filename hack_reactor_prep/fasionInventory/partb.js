function calculateAveragePricePerDesigner(inventory) {
    var result = {designers: []};
    for (var i = 0; i < inventory.length; i++) {
      var designerObj = {
        'name': '',
        'averagePrice': 0
      }
      var sum = 0;
      var designerName = inventory[i].name;
      designerObj.name = designerName;
      // console.log(designerObj);
      for (var j = 0; j < inventory[i].shoes.length; j++) {
        sum += inventory[i].shoes[j].price;
        designerObj.averagePrice = sum / inventory[i].shoes.length;
        if (j === inventory[i].shoes.length - 1) {
        result.designers.push(designerObj)
        }
      }
    }  
    return result;
  }
  