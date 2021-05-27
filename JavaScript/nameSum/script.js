var name = prompt("Tell me your name.");
var x = prompt("Give me a number."); 
var y = prompt("Give me another number.");

function sentence(string) {
    return "You are going to have a wonderful day, " + string + ".";
}
document.getElementById("sentence").innerHTML = sentence(name);

function getSum(num1, num2) {
    var sum = parseInt(x) + parseInt(y);
    return "By the way, the sum of your numbers is " + sum + "."
}
document.getElementById("sum").innerHTML = getSum(x, y);