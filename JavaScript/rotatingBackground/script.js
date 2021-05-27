var imgArr = ['img/background1.jpg', 'img/background2.jpg', 'img/background3.jpg'];
var currentImg = document.getElementById('background');
var index = 0;

function cycleImages() {
    currentImg.style.background = 'url(' + imgArr[index] + ')'; 
    index++;
    if (index === imgArr.length) {
    index = 0;
    }
}
setInterval(cycleImages, 3000);
cycleImages(imgArr, index);