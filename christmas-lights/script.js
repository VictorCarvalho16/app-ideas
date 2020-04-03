const ledItemsodd = document.querySelectorAll('ul li:nth-child(odd)')
const ledItemsAll = document.querySelectorAll('ul li')
const buttonStartStop = document.querySelector('button')

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
        time = setInterval(LedsToggle, 500)
        buttonStartStop.innerHTML = 'Stop'
    } else {
        ledItemsAll.forEach((ledItem) => {
            ledItem.classList.remove('opacity')
        })
        clearInterval(time)
        buttonStartStop.innerHTML = 'Start'
    }
}
