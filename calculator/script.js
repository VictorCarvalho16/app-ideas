const calcInput = document.querySelector('#calc-input')
var calculate = false
var pastValue = 0
var currentValue = 0
var calculationOperation = '+'


calcInput.addEventListener('keydown', (event) => {
    let validKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ',', '.', '+', '-', '*', '/', '=',  'Enter', 'Delete', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'End', 'Home', 'NumLock', 'Alt', 'Escape', 'Shift', 'Control', 'Backspace']
    if (validKeys.indexOf(event.key) === -1) {
        event.preventDefault()
    } else {
        switch (event.key) {
            case '+':
                event.preventDefault()
                handleCalculation('plus')
                break

            case '-':
                event.preventDefault()
                handleCalculation('minus')
                break

            case '*':
                event.preventDefault()
                handleCalculation('times')
                break

            case '/':
                event.preventDefault()
                handleCalculation('divide')
                break

            case '=':
            case 'Enter':
                event.preventDefault()
                handleCalculation('equal')
                break

            case ',':
                event.preventDefault()
                calcInput.value += '.' 
                break
        }
    }

    if (calcInput.value.length === 8) {
        calcInput.value = ''
        calcInput.placeholder = 'ERR'
    }
})

document.querySelector("#zero-button").addEventListener('click', () => { insertNumber(0) })
document.querySelector("#one-button").addEventListener('click', () => { insertNumber(1) })
document.querySelector("#two-button").addEventListener('click', () => { insertNumber(2) })
document.querySelector("#three-button").addEventListener('click', () => { insertNumber(3) })
document.querySelector("#four-button").addEventListener('click', () => { insertNumber(4) })
document.querySelector("#five-button").addEventListener('click', () => { insertNumber(5) })
document.querySelector("#six-button").addEventListener('click', () => { insertNumber(6) })
document.querySelector("#seven-button").addEventListener('click', () => { insertNumber(7) })
document.querySelector("#eight-button").addEventListener('click', () => { insertNumber(8) })
document.querySelector("#nine-button").addEventListener('click', () => { insertNumber(9) })
document.querySelector("#dot-button").addEventListener('click', () => { insertNumber('.') })

document.querySelector("#divide-button").addEventListener('click', () => { handleCalculation('divide') })
document.querySelector("#times-button").addEventListener('click', () => { handleCalculation('times') })
document.querySelector("#minus-button").addEventListener('click', () => { handleCalculation('minus') })
document.querySelector("#plus-button").addEventListener('click', () => { handleCalculation('plus') })
document.querySelector("#equal-button").addEventListener('click', () => { handleCalculation('equal') })

document.querySelector("#ac-button").addEventListener('click', (e) => {
    calcInput.value = ''
    calcInput.placeholder = '0'
    calculate = false
    pastValue = 0
    currentValue = 0
    calculationOperation = '+'
})

document.querySelector("#c-button").addEventListener('click', () => { calcInput.value = '' })
document.querySelector("#backspace-button").addEventListener('click', () => { 
    let newValue = calcInput.value.substr(0, calcInput.value.length -1)

    calcInput.value = newValue
})


document.querySelector("#number-sign-button").addEventListener('click', () => { calcInput.value *= -1 })

function insertNumber(number) {
    if (calcInput.value.length < 8) {
        calcInput.value += number
    } else {
        alert('Max 8 numbers')
    }
}

function handleCalculation(operation) {
    if (calcInput.value != '') {
        currentValue = parseFloat(calcInput.value)
    }

    cleanInput()

    if (calculate || operation === 'equal') {
        switch (calculationOperation) {
            case '/':
                result = pastValue / currentValue
                break

            case '*':
                result = pastValue * currentValue
                break

            case '-':
                result = pastValue - currentValue
                break

            case '+':
                result = pastValue + currentValue
                break
        }
        calcInput.value = result
        calculate = false
    } else {
        pastValue = currentValue
        calculate = true
    }

    switch (operation) {
        case 'divide':
            calculationOperation = '/'
            break
            
        case 'times':
            calculationOperation = '*'
            break

        case 'minus':
            calculationOperation = '-'
            break

        case 'plus':
            calculationOperation = '+'
            break
    }

    calcInput.placeholder = pastValue
}

function cleanInput() {
    calcInput.value = ''
}

