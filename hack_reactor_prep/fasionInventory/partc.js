function listAllBlackShoes(inventory) {
    var flatList = '';
    for (var i = 0; i < inventory.length; i++) {
      var designerName = inventory[i].name;
      for (var j = 0; j < inventory[i].shoes.length; j++) {
        var shoeName = inventory[i].shoes[j].name;
        var shoePrice = inventory[i].shoes[j].price;
      if (shoeName.indexOf('black') > - 1) {
          flatList += designerName + ', ' + shoeName + ', ' + shoePrice + '\n';
      }
    }
  }
  return flatList.slice(0, -1);
  }
  