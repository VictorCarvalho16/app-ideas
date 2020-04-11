const ledItemsodd = document.querySelectorAll('ul li:nth-child(odd)')
const ledItemsAll = document.querySelectorAll('ul li')
const buttonStartStop = document.querySelector('button')
const timeIntervalInput = document.querySelector('#time-interval')
const colorChangeInput = document.querySelector('#color-change')
const intensityInput = document.querySelector('#intensity-value')

const cssDeclaration = document.styleSheets[0].cssRules[0].style;

intensityInput.addEventListener('change', () => {
    cssDeclaration.setProperty('--opacity', intensityInput.value)
})

function LedsToggle() {
    ledItemsAll.forEach((ledItem) => {
        ledItem.classList.toggle('opacity')
    })
}

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
