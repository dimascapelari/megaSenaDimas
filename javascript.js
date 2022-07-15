let btn = document.getElementById('btn')
let resultado1 = document.getElementById('resultado1')
let resultado2 = document.getElementById('resultado2')
let resultado3 = document.getElementById('resultado3')
let resultado4 = document.getElementById('resultado4')
let resultado5 = document.getElementById('resultado5')
let resultado6 = document.getElementById('resultado6')

function sorte(a, b) {
    return Math.floor(Math.random() * (b - a + 1)) + a
}

function print() {
    resultado1.innerHTML = `${sorte(1, 10)}`
    resultado2.innerHTML = `${sorte(11, 20)}`
    resultado3.innerHTML = `${sorte(21, 30)}`
    resultado4.innerHTML = `${sorte(31, 40)}`
    resultado5.innerHTML = `${sorte(41, 50)}`
    resultado6.innerHTML = `${sorte(51, 60)}`
}

btn.addEventListener('click', print)


