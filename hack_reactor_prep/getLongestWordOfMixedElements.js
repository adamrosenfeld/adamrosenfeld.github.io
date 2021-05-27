function getLongestWordOfMixedElements(arr) {
    if (arr.length === 0) {
        return "";
    }
    var words = [];
    for (var i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'string') {
            words.push(arr[i]);
        }    
    }
    if (words.length === 0) {
        return "";
    }
    var longest = words[0];
    for (var i = 0; i < words.length; i++) {
        if (words[i].length > longest.length) {
            longest = words[i];
        }
    }
    return longest;
}
