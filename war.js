
// class Card{
//     //properties of suit and value
//     //constructor to create an instance of card
//     constructor(suit, value) {
//         this.suit = suits;
//         this.value = values;
//     }
//     showCard(){
//         return `Suit: ${this.suit}, Value: ${this.value}`;
//     }
// }

// class Deck{
//     //property of cards which would be an array of instances of Card (the class)
//     constructor(){
//     this.cards = [];
// }

// createDeck(){
// let suits = ['Spade', 'Heart', 'Club', 'Diamond'];
// let values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
// let deck = new Deck();

// for (let i = 0; i < suits.length; i++) {
//     for (let j = 0; j < values.length; j++) {
//         let newCard = new Card(suits[i], values[j]);
//         deck.cards.push(newCard);
    
// }
// }
// }
// shuffleDeck() {
//     for(var i = 0; i < this.cards.length; i++) {
        
//         var temporaryCard = this.cards[i];

//         var randomSwitchCard = Math.floor(math.random() *52);

//         this.cards[i] = this.cards[randomSwitchCard];
//         this.cards[randomSwitchCard] = temporaryCard;    
//     }
// }
// }
// class Players {
//     constructor(name){
//         this.playersName = name;
//         this.hand = [];
//         this.players[0].playersScore = 0;
//         this.players[1].playersScore = 0;
//     }
// }

// class Track {
//     constructor() {
//         this.CardsInPlay = [];
//         this.players = [];
//     }
// function start(player1, player2){
//     this.players.push(new Players(player1));
//     this.players.push(new Players(player2));

//     deck.createDeck();
//     deck.shuffleDeck();

//     this.players

    
// }
// }
//loop through each index in the players cards, comparing them
// function myFunction(score, scores)
// for (var i = 0, i < 26; i++) {
//     if(players[0].playersScore > players[1].playersScore) {
//         return players[0] is the winner;
//     } else if(players[0].playersScore < players[1].playersScore){
//         return players[0] is the winner;
//     } else {
//         return its a tie;
//     }
//  

class Card {
    constructor(suit, rank, value) {
        this.suit = suit;
        this.rank = rank;
        this.value = value;
    }
}
class Deck {
    constructor() {
        this.cards = [];    
    }      
    createDeck() {
        let suits = ['clubs', 'diamonds', 'hearts', 'spades'];
        let ranks = ['ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king'];
        let values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
        for (let i = 0; i < suits.length; i++) {
            for (let j = 0; j < ranks.length; j++) {
                this.cards.push(new Card(suits[i], ranks[j], values[j]));
            }
        }
    }
    //expect that an array has a length of 26
    shuffleDeck() {
       let location1, location2, tmp;
       for (let i = 0; i < 1000; i++) {
           location1 = Math.floor((Math.random() * this.cards.length));
           location2 = Math.floor((Math.random() * this.cards.length));
           tmp = this.cards[location1];
           this.cards[location1] = this.cards[location2];
           this.cards[location2] = tmp;
        }
    }
}
class Player {
    constructor(name) {
        this.playerName = name;
        this.playerCards = [];
        
    }
}
class Board {
    constructor() {
       
        this.players = [];
        
        
    
    }
    start(playerOneName, playerTwoName) {
        this.players.push(new Player(playerOneName));
        this.players.push(new Player(playerTwoName));
        let deck = new Deck();
        deck.createDeck();
        deck.shuffleDeck();    
        this.players[0].playerCards = deck.cards.slice(0, 26);
        this.players[1].playerCards = deck.cards.slice(26, 52);
        
    }

play() {
    // this.score = 0;
    let players1score = 0;
    let players2score = 0;
    for(let i = 0; i < 26; i++) {
    if(this.players[0].playerCards[i].value > this.players[1].playerCards[i].value){
        console.log('player 1 wins');
        players1score++;
    } else if 
        (this.players[0].playerCards[i].value < this.players[1].playerCards[i].value) {
            console.log('player 2 wins');
            players2score++;
        } else {
            console.log('its a tie');
        }
    } 
    console.log(`Score is: player 1: ${players1score} to player 2: ${players2score}`);
}
}

let board = new Board();
board.start('Player 1', 'Player 2');
console.log(board.players);
board.play();
