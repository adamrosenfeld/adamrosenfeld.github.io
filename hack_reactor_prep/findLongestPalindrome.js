function findLongestPalindrome(sentence) {
    var words = sentence.split(' ');
    var palindromes = [];
    for (var i = 0; i < words.length; i++) {
      if (isPalindrome(words[i])) {
        palindromes.push(words[i]);
      }
    } 
    palindromes.sort(sortAscendingByLength)
    return palindromes[palindromes.length - 1]
  }
    function reverseString(string) {
      return string.split('').reverse().join('')
  }
  function isPalindrome(word) {
    if (reverseString(word) === word) {
      return true;
    } else {
      return false;
    }
  }
  
  function sortAscendingByLength(a, b) {
    if (a.length > b.length) {
      return 1;
    } else if (a.length < b.length) {
      return -1;
    }
    return 0;
  }
  
  function assertEquals(actual, expected, testName) {
    if (actual === expected) {
      console.log('PASSED [' + testName + ']');
    } else {
      console.log('FAILED [' + testName + ']');
    }  
  }
  
  var actualResult1 = findLongestPalindrome('this is a racecar ada');
  var expectedResult1 = 'racecar';
  assertEquals(actualResult1, expectedResult1, 'return longest palindrome')
  
  var actualResult2 = findLongestPalindrome('hannah eats ufotofu');
  var expectedResult2 = 'hannah';
  assertEquals(actualResult2, expectedResult2, 'return longest palindrome')