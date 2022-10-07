// Načítání dat z localStorage pomocí porměnné names (pokud jsou hodnoty, načtou se, pokud ne vytvoří se prázdné pole)
const names = getSavedNames()

// Ukládání hodnot do LocalStorage pomocí proměnné names
const form = document.querySelector("#test-form")

form.addEventListener("submit", function (e) {
  e.preventDefault()

  names.push({
    id: uuidv4(),
    firstName: e.target.elements.firstName.value,
  })

  e.target.elements.firstName.value = ""

  saveNames(names)
})

// Vypisování hodnot z local Storage

const button = document.querySelector("button")

button.addEventListener("click", function (e) {
  let dataFromLS = JSON.parse(localStorage.getItem("names"))

  dataFromLS.forEach(function (item) {
    textFieldCreate(item)
  })
})
