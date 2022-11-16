// const inputOne = document.querySelector(".inputOne")
// const buttonOne = document.querySelector(".buttonOne")
// const theLength = document.querySelector(".theLenght")
// const resetButton = document.querySelector(".resetButton")

// buttonOne.onclick = () => {
//     const inputValue = inputOne.value.length
//     document.querySelector(".theLenght").textContent = inputValue
// }

// resetButton.onclick = () => {
//     inputOne.value = ""
//     theLength.textContent = ""

// }



//---------------EJERCICIO 1---------------------
const inputName = document.querySelector("#nombreCliente")
const materialSelection = document.querySelector("#materialSeleccion")
const sizeSelection = document.querySelectorAll(".size")
const inputTextArea = document.querySelector("#comments")
const inputResult = document.querySelector("#result")
const buttonSend = document.querySelector(".send")


buttonSend.onclick = () => {
    let inputNameValue = inputName.value
    let materialSelectionValue = materialSelection.value
    let sizeSelectionValue = sizeSelection.value
    let inputTextAreaValue = inputTextArea.value


    inputResult.value = `${inputNameValue} ha pedido una caja de ${materialSelectionValue} con unas dimensiones ${sizeSelectionValue}.${inputTextAreaValue}.`
}






