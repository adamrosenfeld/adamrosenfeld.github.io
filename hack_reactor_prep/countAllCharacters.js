function countAllCharacters(str) {
    if (str === "") {
      return {};
    } 
    var count = {};
    for (var i = 0; i < str.length; i++) {
      if (count[str[i]] === undefined) {
        count[str[i]] = 1;
      } else {
        count[str[i]]++;
      }
    }
    return count;
  }