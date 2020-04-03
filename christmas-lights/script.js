const ledItems1 = document.querySelectorAll('ul li:nth-child(odd)')
const ledItems2 = document.querySelectorAll('ul li:nth-child(even)')

var timeLeds1
var timeLeds2
/*
window.onload = () => {ledItems.forEach((ledItem, index) => {
    setTimeout(function(){
        console.log('t')
        ledItem.classList.toggle('opacity')
      },3000)
    
    /*console.log(index)
    ledItem.addEventListener('click', () => {
        ledItem.classList.toggle('opacity')
    })/
})}*/

function Leds1() {
    console.log('1')
    ledItems1.forEach((ledItem) => {
        ledItem.classList.toggle('opacity')
    })
}

function Leds2() {
    console.log('2')
    ledItems2.forEach((ledItem) => {
        ledItem.classList.toggle('opacity')
    })
}

function ledBlink() {
    timeLeds1 = setInterval("Leds1()", 1000 )
    timeLeds2 = setInterval(Leds2, 2000 )
    reiniciarScript()
}

function reiniciarScript() {
    clearInterval(timeLeds1)
    clearInterval(timeLeds2)
    ledBlink()
}

ledBlink()
