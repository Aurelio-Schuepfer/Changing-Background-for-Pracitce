const colors = ['red', 'blue', 'green', 'yellow', 'orange', 'purple', 'pink', 'brown', 'black', 'white'];

let currentIndex = 0;

function changeBackgroundColor() {

    const body = document.body;

    body.style.backgroundColor = colors[currentIndex];

    currentIndex++;

    if (currentIndex >= colors.length) {
        currentIndex = 0;
    }
}

setInterval(changeBackgroundColor, 500);
