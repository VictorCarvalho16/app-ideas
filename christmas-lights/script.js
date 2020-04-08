const ledItemsodd = document.querySelectorAll('ul li:nth-child(odd)')
const ledItemsAll = document.querySelectorAll('ul li')
const buttonStartStop = document.querySelector('button')
const timeIntervalInput = document.querySelector('#time-interval')
const colorChangeInput = document.querySelector('#color-change')

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
