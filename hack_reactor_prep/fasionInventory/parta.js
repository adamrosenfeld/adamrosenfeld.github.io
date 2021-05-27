function renderInventory(inventory) {
    var flatList = '';
  
    for (var i = 0; i < inventory.length; i++) {
      var designerName = inventory[i].name;
      for (var j = 0; j < inventory[i].shoes.length; j++) {
        var shoeName = inventory[i].shoes[j].name;
        var price = inventory[i].shoes[j].price;
        flatList += designerName + ', ' + shoeName + ', ' + price;
    
        if (i !== inventory.length - 1 || j !== inventory[inventory.length - 1].shoes.length - 1) {
          flatList += '\n';
        }
      }
    }
    return flatList;
  }