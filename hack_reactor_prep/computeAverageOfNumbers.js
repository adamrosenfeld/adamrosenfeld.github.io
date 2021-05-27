function computeAverageOfNumbers(nums) {
    if (nums.length === 0) {
      return 0;
    }
    var sum = 0;
    for (var i = 0; i < nums.length; i++) {
     sum += nums[i];
    }
     return sum / nums.length;
  }