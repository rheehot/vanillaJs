const body = document.querySelector("body");

const IMG_NUMBER = 5;

// function handleImagLoad() {
//     console.log('finished loading');
// }

function paintImage(imgNumber) {
    const image = new Image();
    image.src = `img/${imgNumber + 1}.jpg`;
    image.classList.add('bgImg');
    body.prepend(image);
    // image.addEventListener("loadend", handleImagLoad);
}

function genRandom() {
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
}

function init() {
    const randomNumber = genRandom();
    paintImage(randomNumber);
}

init();