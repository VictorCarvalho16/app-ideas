const exampleDiv = document.querySelector('.example')
const borderLeftTopInput = document.querySelector('#border-left-top')
const borderLeftBottomInput = document.querySelector('#border-left-bottom')
const borderRightTopInput = document.querySelector('#border-right-top')
const borderRoghtBottomInput = document.querySelector('#border-right-bottom')
const resultButton = document.querySelector('#css-results')
const resultDiv = document.querySelector('#result')

borderLeftTopInput.addEventListener('change', () => {
    let value = borderLeftTopInput.value
    exampleDiv.style.borderTopLeftRadius = `${value}px`
})

borderLeftBottomInput.addEventListener('change', () => {
    let value = borderLeftBottomInput.value
    exampleDiv.style.borderBottomLeftRadius = `${value}px`
})

borderRightTopInput.addEventListener('change', () => {
    let value = borderRightTopInput.value
    exampleDiv.style.borderTopRightRadius = `${value}px`
})

borderRoghtBottomInput.addEventListener('change', () => {
    let value = borderRoghtBottomInput.value
    exampleDiv.style.borderBottomRightRadius = `${value}px`
})

resultButton.addEventListener('click', () => {
    if (exampleDiv.style.cssText) {
        resultDiv.innerHTML = `<h3 id="result-text">${exampleDiv.style.cssText}</h3>`
    }
})

exampleDiv.addEventListener('click', () => {
    exampleDiv.style.backgroundColor  = getRandomColor()
})

function copyTextToClipboard() {

    if (document.getElementById("result-text") == null) {
        return ''
    }
    var copyText = document.getElementById("result-text").innerHTML
    navigator.clipboard.writeText(copyText)
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}