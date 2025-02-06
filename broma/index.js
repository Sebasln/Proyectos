function SayHimHesGay() {
    var span = document.getElementById("contentContainer");
    span.parentNode.replaceChild(document.createTextNode("Qué gay"), span);
}


function tpButton() {
    var button = document.getElementById('button');

    var top = getRandomPosition(100, window.innerHeight - 100);

    var left = getRandomPosition(100, window.innerWidth - 100);

    // console.log(top, left);

    button.style.position = 'absolute';

    button.style.top = top + "px";
    button.style.left = left + "px";
}

function getRandomPosition(min, max) {
    return Math.random() * (max - min) + min;
}
