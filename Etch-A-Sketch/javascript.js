const container = document.querySelector(".container");
const box = document.querySelectorAll(".square")
const rainbowButton = document.querySelector(".rainbow-btn");



function createSquares(a) {
for(i = 0; i < (a * a); i++) {
    const squareDiv = document.createElement("div");
    let opacity = 0.1;
    squareDiv.classList.add("square");
    container.appendChild(squareDiv);
    squareDiv.addEventListener("mouseover", () => {
            squareDiv.style.backgroundColor = "black";
            squareDiv.style.opacity = opacity;
            if(opacity < 1) {
                opacity += 0.1;
            };
    })
    rainbowtbn(squareDiv);
};
}


function randomColor() {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
    console.log(red);
    return `RGB(${red},${green},${blue})`
}



function getRandomColor(event) {
    event.target.style.backgroundColor = randomColor();
}



let rainbowtbn = (squareDiv) => rainbowButton.addEventListener("click", () => {
    squareDiv.addEventListener("mouseenter", getRandomColor)
})



createSquares(16);



