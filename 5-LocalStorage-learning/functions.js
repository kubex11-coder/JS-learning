// ověření zda jsou data v localStorage

const getSavedNames = () => {
  const myNames = localStorage.getItem("names")

  if (myNames !== null) {
    return JSON.parse(myNames)
  } else {
    return []
  }
}

// Zadání dat do localStorage

const saveNames = function (oneName) {
  localStorage.setItem("names", JSON.stringify(oneName))
}

// Vypsání dat z local storage

const textFieldCreate = function (oneName) {
  const newDiv = document.createElement("div")
  const newButton = document.createElement("button")
  const newSpan = document.createElement("span")

  newButton.textContent = "Vymazat položku"
  newDiv.appendChild(newButton)

  newSpan.textContent = oneName.firstName
  newDiv.appendChild(newSpan)

  const textField = document.querySelector(".text-field")
  textField.appendChild(newDiv)
}
