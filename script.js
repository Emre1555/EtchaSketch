const squareContainer = document.getElementById("square-container")
const squares = document.getElementsByClassName("squares")

function createDivs(times, color="black") {
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
    for (let i = 0; i < squares.length; i++){
        squares[i].addEventListener("mouseover", () => {
            squares[i].classList.add(color)
            
        })
    }
}

createDivs(3)