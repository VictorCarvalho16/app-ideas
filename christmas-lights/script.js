var ledItemsodd = document.querySelectorAll('ul li:nth-child(odd)')
var ledItemsAll = document.querySelectorAll('ul li')

const lightsGridDiv = document.querySelector('#lights-grid')
const buttonStartStop = document.querySelector('button')
const timeIntervalInput = document.querySelector('#time-interval')
const colorChangeInput = document.querySelector('#color-change')
const intensityInput = document.querySelector('#intensity-value')
const colunsNumberInput  = document.querySelector('#coluns-number')

var time 

const cssDeclaration = document.styleSheets[0].cssRules[0].style;

intensityInput.addEventListener('change', () => {
    cssDeclaration.setProperty('--opacity', intensityInput.value)
})

function LedsToggle() {
    ledItemsAll.forEach((ledItem) => {
        ledItem.classList.toggle('opacity')
    })
}

colunsNumberInput.addEventListener('change', () => {
    let coluns = colunsNumberInput.value

    lightsGridDiv.innerHTML = ''
    
    for (let index = 0; index < coluns; index++) {
        lightsGridDiv.innerHTML += ` 
        <ul>
            <li class="red"></li>
            <li class="orange"></li>
            <li class="yellow"></li>
            <li class="green"></li>
            <li class="blue"></li>
            <li class="purple"></li>
            <li class="pink"></li>
        </ul>`
    }


    ledItemsodd = document.querySelectorAll('ul li:nth-child(odd)')
    ledItemsAll = document.querySelectorAll('ul li')
    console.log(time)
    if(time) {
        ledBlink() 
    }
})

timeIntervalInput.addEventListener('change', () => {
    if(time) {
        ledBlink() 
    }
})

function ledBlink() {
    if(buttonStartStop.innerHTML === 'Start'){
        ledItemsodd.forEach((ledItem) => {
            ledItem.classList.toggle('opacity')
        })
        time = setInterval(LedsToggle, timeIntervalInput.value * 1000)
        buttonStartStop.innerHTML = 'Stop'
    } else {
        ledItemsAll.forEach((ledItem) => {
            ledItem.classList.remove('opacity')
        })
        clearInterval(time)
        time = false
        buttonStartStop.innerHTML = 'Start'
    }
}

ledItemsAll.forEach( item => {
    item.addEventListener('click', (e) => {
        colorChangeInput.click()
        colorChangeInput.onchange = function(evt) {
            e.srcElement.style.backgroundColor = evt.srcElement.value
        }
    })
})
