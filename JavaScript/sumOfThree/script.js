var numbers = [];
numbers[0] = prompt("Give a number.");
numbers[1] = prompt("Give another number.");
numbers[2] = prompt("Give a number again.");

function addElements(array) {
    var sum = 0;
    array = array.map(Number);    
    for (var i = 0; i < array.length; i++) {
        if (isNaN(array[i]) === true) {
            return "You entered characters that are not numbers. Please reload and try again.";
        } else {
            sum += array[i];
        }
    }
    return "The sum of all your numbers is " + sum + ".";  
} 
document.getElementById("sum").innerHTML = addElements(numbers);
