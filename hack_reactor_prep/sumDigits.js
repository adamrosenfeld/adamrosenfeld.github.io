function sumDigits(num) {
    var numIsNegative = false;
    if(num < 0) {
      num = Math.abs(num);
      numIsNegative = true;
    }
    var sum = 0;
    var stringNum = num.toString();
    var firstValue = Number(stringNum[0]);
    for (var i = 0; i < stringNum.length; i++) {
      sum += Number(stringNum[i]);  
    }
    if (numIsNegative) {
      sum = sum - (2 * firstValue);
      return sum;
    } else {
      return sum;
    }
  }
  