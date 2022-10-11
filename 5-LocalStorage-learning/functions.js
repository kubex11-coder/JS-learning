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

// Vypsání dat z local storage na stránku + vymazání

const textFieldCreate = function (oneName) {
  const newDiv = document.createElement("div")
  const newButton = document.createElement("button")
  const newSpan = document.createElement("span")

  newButton.textContent = "Vymazat položku"
  newDiv.appendChild(newButton)

  newButton.addEventListener("click", function (e) {
    removeIndex(oneName.id)
    saveNames(names)
    textFieldCreateAgain(names)
  })

  newSpan.textContent = oneName.firstName
  newDiv.appendChild(newSpan)

  const textField = document.querySelector(".text-field")
  textField.appendChild(newDiv)
}

//Zjištění indexu pro odstranění hodnoty z local storage

const removeIndex = function (myID) {
  const id = names.findIndex(function (checkedName) {
    return checkedName.id === myID
  })
  if (id > -1) {
    names.splice(id, 1)
  }
}

// opětovná smazání textu z pole a naplnění dle localStorage

const textFieldCreateAgain = (oneName) => {
  const textField = document.querySelector(".text-field")
  textField.innerHTML = ""

  const myNames = JSON.parse(localStorage.getItem("names"))
  myNames.forEach(function (item) {
    textFieldCreate(item)
  })
}
