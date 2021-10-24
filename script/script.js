function shuffle(deck) {
    shuffledDeck = []

    for (let i = 51; i >= 0; i--) {
        let random = Math.floor(Math.random() * i)
        let card = deck[random]
        shuffledDeck.push(card)
        deck.splice(random, 1)
    }
}

function newCard() {
    let newCard = shuffledDeck.shift()
    
    let playGround = document.querySelector("article p:nth-child(1)")
    playGround.innerHTML = "<strong>"+newCard.value+"</strong>"
    playGround.setAttribute("class", "")
    playGround.classList.add("card", "card-value", newCard.suit)

    let pageCardsLeft = document.querySelector("article p:nth-child(2) span:nth-child(1)")
    pageCardsLeft.innerText = shuffledDeck.length
}

let shuffledDeck = []
let points = 0
let lifes = 3

function rightYouAre() {
    if (shuffledDeck.length == 0) {
        alert ("Game over")
        return
    }
    newCard()
    points = points + 1
    let pagePoints = document.querySelector("header p:nth-child(1) span:nth-child(2)")
    pagePoints.innerText = points
}

function wrongYouAre() {
    newCard()
    lifes = lifes - 1
    let pageLifes = document.querySelector("header p:nth-child(2) span:nth-child(2)")
    pageLifes.innerText = lifes

    if (lifes == 0) {
        
        alert("Sorry, You lost!")
    }
}

function guessGame() {
    let pagePoints = document.querySelector("header p:nth-child(1) span:nth-child(2)")
    pagePoints.innerText = points

    let pageLifes = document.querySelector("header p:nth-child(2) span:nth-child(2)")
    pageLifes.innerText = lifes


    let suits = ['hearts','clubs','diamonds','spades'] 
    let values = [1,2,3,4,5,6,7,8,9,10,11,12,13]

    let deck = []
    for (let suit of suits) {
        for (let value of values) {
            let card = {
                'suit': suit,
                'value': value
            }

            deck.push(card)
        }
    }
    
    shuffle(deck)

    newCard()
    
    let nextIsLowerBtn = document.querySelector("footer button:nth-child(1)")
    nextIsLowerBtn.addEventListener("click", function nextIsLower() {
            if (lifes == 0) {
                return
            }

            let playGround = document.querySelector("article p:nth-child(1)")
            
            let playGroundValue = playGround.innerText

            let nextCard = shuffledDeck[0]
            let nextCardValue = nextCard.value
            if (nextCardValue < playGroundValue) {
                rightYouAre()
            } else {
                wrongYouAre()
            }
        }
    )

    let nextIsEqualBtn = document.querySelector("footer button:nth-child(2)")
    nextIsEqualBtn.addEventListener("click", function nextIsEqual() {
            if (lifes == 0) {
                return
            }
            let playGround = document.querySelector("article p:nth-child(1)")
            
            let playGroundValue = playGround.innerText

            let nextCard = shuffledDeck[0]
            let nextCardValue = nextCard.value
            if (nextCardValue == playGroundValue) {
                rightYouAre()
            } else {
                wrongYouAre()
            }
        }
    )

    let nextIsHigherBtn = document.querySelector("footer button:nth-child(3)")
    nextIsHigherBtn.addEventListener("click", function nextIsHigher() {
            if (lifes == 0) {
                return
            }
            let playGround = document.querySelector("article p:nth-child(1)")
            
            let playGroundValue = playGround.innerText

            let nextCard = shuffledDeck[0]
            let nextCardValue = nextCard.value
            if (nextCardValue > playGroundValue) {
                rightYouAre()
            } else {
                wrongYouAre()
            }
        }
    )

}

function main() {
    guessGame()
}

main()