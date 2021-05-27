document.getElementById("userText").addEventListener("keyup", function() {

var length = document.getElementById("userText").value.length;
var message = document.getElementById("theMessage");
var count = (10 - (length));
message.textContent = count + " characters left";

if (count <= 3 ) {
    message.style.color = "#ff2f52"
} else {
    message.style.color = "black";
}

});


