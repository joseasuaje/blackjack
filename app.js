
// Declaring the variables

let sum = 0;
let bigEl = document.getElementById("big-el");
let messageEl = document.getElementById("message-el");
let cardsEl = document.getElementById("cards-el");
let sumEl = document.getElementById("sum-el");
let playerEl = document.getElementById("player-el");
let player = {
    name: "Jose",
    cash: ""
}
let message = "";
let hasBlackjack = false;
let isAlive = false;
let cards = [];

// Creating functions
playerEl.textContent = player.name + ": $" + player.cash;

function getRandomCard() {
    let card = Math.floor(Math.random() * 13) + 1;
    if (card > 10) {
        return 10
    } else if (card === 1) {
        return 11
    } else {
        return card
    }
}

function startGame() {
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame();
}

function renderGame() {
    cardsEl.textContent = "Cards: ";
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
    }

    sumEl.textContent = "Sum: " + sum;
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got BlackJack!"
        hasBlackjack = true;
        player.cash += 10;
    } else {
        message = "You're out of game!"
        isAlive = false
        player.cash -= 10;
    }
    messageEl.textContent = message;


}

function newCard() {
    if (isAlive === true && hasBlackjack === false) {
        let card = getRandomCard()
        sum += card;
        cards.push(card)
        renderGame()
    }
}

