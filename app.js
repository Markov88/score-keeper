const input = document.querySelector('#input')
const playingTo = document.querySelector('#playingTo')
let scoreFirst = document.querySelector('#first')
let scoreSecond = document.querySelector('#second')
const btnFirst = document.querySelector('#player1')
const btnSecond = document.querySelector('#player2')
const reset = document.querySelector('#reset')
let score1 = 0
let score2 = 0
let gameOver = false


input.addEventListener('change', function () {
    playingTo.textContent = input.value
})

btnFirst.addEventListener('click', counter1)
btnSecond.addEventListener('click', counter2)


function counter1 () {
    if (score1 < input.value && !(gameOver)) {
        score1++
        scoreFirst.textContent = score1
        if (score1 === +input.value) {
            gameOver = true
            scoreFirst.style.color = 'green'

        }
    }

}
function counter2 () {
    if (score2 < input.value && !(gameOver)) {
        score2++
        scoreSecond.textContent = score2
        if (score2 === +input.value) {
            gameOver = true
            scoreSecond.style.color = 'green'
        }
    }
    return 0
}
reset.addEventListener('click', () => {

    scoreFirst.textContent = 0
    scoreSecond.textContent = 0
    scoreFirst.style.color = 'black'
    scoreSecond.style.color = 'black'
    score1 = 0
    score2 = 0
    playingTo.textContent = ''
    input.value = ''
    gameOver = false
})