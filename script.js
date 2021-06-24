const squareContainer = document.getElementById("square-container")
const squares = document.getElementsByClassName("squares")

function createDivs(times="16", color="black") {
    for (let i = 0; i < times; i++){
        let rows = document.createElement("div")
        rows.className = "rows"
        rows.style.display = "flex"
        rows.style.flexDirection = "column"
        rows.style.flexGrow = "1"
        rows.style.alignContent = "stretch" 
        for (let k = 0; k < times; k++){
            let square = document.createElement("div")
            square.className = "squares"
            square.style.border = "solid 0.05em"
            square.style.flexGrow = "1"
            rows.appendChild(square)
        }
        squareContainer.appendChild(rows)
    }
    colorize(color)
}

function colorize(color) {
    for (let i = 0; i < squares.length; i++) {
        if (color === "rainbow") {
            squares[i].addEventListener("mouseover", () => {
                squares[i].style.background = "#" + Math.floor(Math.random()*16777215).toString(16);
            })
        }
        else {
            squares[i].addEventListener("mouseover", () => {
                squares[i].classList.add(color)
            }
            )
        }
    }
}

//creating custom table

const colorSelect = document.getElementById("color")
const squareNumber = document.getElementById("squareNumber")
const genBut = document.getElementById("genBut")

genBut.addEventListener("click", () => {
    squareContainer.innerHTML=""
    createDivs(squareNumber.value, colorSelect.value)
})

createDivs(16)