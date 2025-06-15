const css = document.getElementById("css-code");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const color3 = document.querySelector(".color3");
const body = document.getElementById("gradient");
const randomizeButton = document.getElementById("randomize");
const copyButton = document.getElementById("copy");

function setGradient() {
    body.style.background =
        "linear-gradient(to right, "
        + color1.value
        + ", "
        + color2.value
        + ", "
        + color3.value
        + ")";

    css.textContent = body.style.background + ";";
}

function randomizeColors() {
    color1.value = getRandomColor();
    color2.value = getRandomColor();
    color3.value = getRandomColor();
    setGradient();
}

function copyToClipboard() {
    const generatedCSS = body.style.background;
    if (generatedCSS) {
        const textArea = document.createElement("textarea");
        textArea.value = generatedCSS + ";";
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("Copy");
        document.body.removeChild(textArea);

        // Change the button text to "Copied!"
        copyButton.textContent = "Copied!";

        // Reset the button text after 2 seconds
        setTimeout(() => {
            copyButton.textContent = "Copy CSS";
        }, 2000);
    } else {
        alert("Generate CSS before copying!");
    }
}

function getRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
color3.addEventListener("input", setGradient);
randomizeButton.addEventListener("click", randomizeColors);
copyButton.addEventListener("click", copyToClipboard);
