//zachycení divu cube
const cube = document.getElementById("cube")

//zachycení všech stylů pro cube
let style = getComputedStyle(cube)

//funkce pro úpravu css stylů top a left - pohyb kostky
const myFunction = (e) => {
    if (e.key === "ArrowRight") {
        let oldfLeft = parseInt(style.left)
        let newLeft = oldfLeft + 10
        cube.style.left = newLeft + "px"
    } else if (e.key === "ArrowLeft") {
        let oldfLeft = parseInt(style.left)
        let newLeft = oldfLeft - 10
        cube.style.left = newLeft + "px"
    } else if (e.key === "ArrowUp") {
        let oldTop = parseInt(style.top)
        let newTop = oldTop - 10
        cube.style.top = newTop + "px"
    } else if (e.key === "ArrowDown") {
        let oldTop = parseInt(style.top)
        let newTop = oldTop + 10
        cube.style.top = newTop + "px"
    }
}

//event listener na zmáčknutí klávesy pro pohyb kostky
document.body.addEventListener("keydown", myFunction)
