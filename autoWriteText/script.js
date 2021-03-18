const text = "I LOVE HUMANITY <3";

let index = 0;

function writeText() {
    document.getElementById("as").innerText = text.slice(0, index);

    index++;

    if (index > text.length) {
        index = 0;
    }
}

setInterval(writeText, 200);