const exampleDiv = document.querySelector('.example')
const borderLeftTopInput = document.querySelector('#border-left-top')
const borderLeftBottomInput = document.querySelector('#border-left-bottom')
const borderRightTopInput = document.querySelector('#border-right-top')
const borderRightBottomInput = document.querySelector('#border-right-bottom')
const resultButton = document.querySelector('#css-results')
const resultDiv = document.querySelector('#result')
const typeBorderRadiusSelect = document.querySelector('#typeBorderRadius')

borderLeftTopInput.addEventListener('change', () => {changeBorderRadius('leftTop')})
borderLeftBottomInput.addEventListener('change', () => {changeBorderRadius('leftBottom')})
borderRightTopInput.addEventListener('change', () => {changeBorderRadius('rightTop')})
borderRightBottomInput.addEventListener('change', () => {changeBorderRadius('rightBottom')})

typeBorderRadiusSelect.addEventListener('change', () => {
    let type = typeBorderRadiusSelect.value
    resultDiv.innerHTML = ''
    if (type === "%") {
        exampleDiv.style.borderRadius = exampleDiv.style.borderRadius.replace(/px/g, "%")
    } else if (type === "px") {
        exampleDiv.style.borderRadius = exampleDiv.style.borderRadius.replace(/%/g, "px")
    } else {
        console.log('Algo está errado')
    }
})

resultButton.addEventListener('click', () => {
    if (exampleDiv.style.cssText) {
        resultDiv.innerHTML = `<h3 id="result-text">${exampleDiv.style.cssText}</h3>`
    }
})

exampleDiv.addEventListener('click', () => {
    exampleDiv.style.backgroundColor  = getRandomColor()
})


function changeBorderRadius(element) {
    resultDiv.innerHTML = ''
    let type = typeBorderRadiusSelect.value
    switch (element) {
        case 'leftTop':
            exampleDiv.style.borderTopLeftRadius = `${borderLeftTopInput.value}${type}`
            break;
        case 'leftBottom':
            exampleDiv.style.borderBottomLeftRadius = `${borderLeftBottomInput.value}${type}`
            break;
        case 'rightTop':
            exampleDiv.style.borderTopRightRadius = `${borderRightTopInput.value}${type}`
            break;
        case 'rightBottom':
            exampleDiv.style.borderBottomRightRadius = `${borderRightBottomInput.value}${type}`
            break;
    }
}


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