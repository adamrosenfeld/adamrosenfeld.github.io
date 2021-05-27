function findSmallestNumberAmongMixedElements(arr) {
    if (arr.length === 0) {
        return 0;
    }
    var numbers = [];
    for (var i = 0; i < arr.length; i++) {
      if (Number.isInteger(arr[i]) === true) {
        numbers.push(arr[i]);
      }
    }
    if (numbers.length === 0) {
      return 0;
    }
    var smallest = numbers[0];
    for (var i = 0; i < numbers.length; i++) {
      if (numbers[i] < smallest) {
        smallest = numbers[i];
      }
    }
    return smallest;
  }