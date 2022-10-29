let messageCard = document.getElementById("cards-el")
let messageSum = document.getElementById("sum-el")
let messageEl = document.querySelector("#message-el")
let isAlive = false
let hasBlackJack = false
let cards = []
let sum = 0

function getRandomNumber(){
    let number = Math.floor(Math.random() * 13) +1
    if(number == 11 || number== 12|| number== 13 ){
        return 10
    }else if(number == 1){
        return 11
    }else{
        return number
    }     
}

function updateCards(){
    messageCard.textContent = "Cards : "
    for(let i = 0; i < cards.length; i++){
        messageCard.textContent += cards[i] + " " 
    }
}

function startGame(){
    isAlive = true
    hasBlackJack = false
    let firstCard = getRandomNumber()
    let secondCard = getRandomNumber()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame(){
    messageSum.textContent = "Sum : " + sum
    updateCards()
    if(sum < 21){
        messageEl.textContent = "Do you want to draw Card?"
    }else if(sum == 21){
        messageEl.textContent = "You got a Black Jack!"
        hasBlackJack = true
    } else{
        messageEl.textContent = "Game Over!"
        isAlive = false
    }
}

function newCard(){
    if(isAlive && !hasBlackJack){
        let card = getRandomNumber()
        cards.push(card)
        sum += card
        renderGame()
    }
}
