const binaryInput = document.querySelector("#binary-input")
const binarySelect = document.querySelector("#binary-digits")
const convertButton = document.querySelector("#convert")
const resultText =  document.querySelector("#result")

binaryInput.addEventListener('keydown', (event) => {
    let pressedKey = event.keyCode
    let binaryKeys = [8, 9, 13, 27, 35, 36,37, 38, 39, 40, 46, 48, 49, 96, 97]
    if (!( binaryKeys.includes(pressedKey) )) {
        event.preventDefault()
        alert('Please. Insert Only Binaries!')
    }
    if (pressedKey == 13) {
        convertButton.click();
    }
})

convertButton.addEventListener('click', () => {
    let binaryNumber = binaryInput.value
    let decimalNumber = bin_to_dec(binaryNumber)

    resultText.innerHTML = `
        <h3>Decimal Number</h3>
        <h2>${decimalNumber}</h2>`
})

binarySelect.addEventListener('change', () => { 
    let digits = binarySelect.value 
    let binaryNow = binaryInput.value

    binaryInput.maxLength = digits

    if (binaryNow.length > digits) {
        binaryInput.value =  binaryNow.substr(1, digits)
    }
})

function bin_to_dec(bstr) { 
    return parseInt((bstr + '')
    .replace(/[^01]/gi, ''), 2);
}