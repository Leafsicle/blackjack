let playerHand = [];
let dealerHand = [];
let deck = [];
let playerScore = 0;
let dealerScore = 0;

let scorePlayer = document.querySelector('.player .score');

let scoreDealer = document.querySelector('.dealer .score');

let decision = document.querySelector('.decision');

const dealToPlayer = () => {
  // one card is removed from the deck
  let card = deck.pop();
  // that card is sent to the player's hand\
  playerHand.push(card);
  console.log(`the player has the ${card.value} of ${card.suit}`);
  playerScoreCalc();
};

let playerScoreCalc = () => {
  if (
    playerHand.length === 2 ||
    playerHand.length === 3 ||
    playerHand.length === 4 ||
    playerHand.length === 5
  )
    playerScore =
      playerHand[0].value +
      playerHand[1].value +
      playerHand[2].value +
      playerHand[3].value +
      playerHand[4].value +
      playerHand[5].value;
  scorePlayer.textContent = playerScore;
  // hardStop();
};

let dealerScoreCalc = () => {
  if (
    dealerHand.length === 2 ||
    dealerHand.length === 3 ||
    dealerHand.length === 4 ||
    dealerHand.length === 5
  )
    dealerScore =
      dealerHand[0].value +
      dealerHand[1].value +
      dealerHand[2].value +
      dealerHand[3].value +
      dealerHand[4].value +
      dealerHand[5].value;
  scoredealer.textContent = dealerScore;
  // hardStop();
};

const dealToDealer = () => {
  card = deck.pop();
  dealerHand.push(card);
  console.log(`the dealer has the ${card.face} of ${card.suit}`);
  dealerScoreCalc();
};
const winLossCalc = () => {
  if (dealerScore < playerScore) {
    decision.textContent = `You have ${playerScore} and the dealer has ${dealerScore}. You win.`;
  }
  if (dealerScore > playerScore) {
    decision.textContent = `You have ${playerScore} and the dealer has ${dealerScore}. You lose.`;
  }
  if (dealerScore === playerScore) {
    decision.textContent = `You have ${playerScore} and the dealer has ${dealerScore}. The house wins! Try again.`;
  }
};
// const hardstop = () => {
//   document.querySelector('.hit').classList.add('hide');
//   document.querySelector('.stay').classList.add('hide');

//   dealCardToDealer();
//   dealerScoreCalc();
//   if (dealerScore < 17) {
//     hardStop();
//   }
//   if (dealerScore >= 17 && dealerScore <= 21) {
//     winLossCalc();
//   }
//   if (dealerScore > 21) {
//     decision.textContent = `The dealer has busted with a score of ${dealerScore}, you are victorious!`;
//   }
// };
const addCard = () => {
  dealToPlayer();
  playerScoreCalc();
  if (playerScore <= 21) {
    decision.textContent = `your score is ${playerScore}, would you like to hit or stay?`;
  }
  if (playerScore > 21) {
    document.querySelector('.hit').classList.add('.hide');
    document.querySelector('.stay').classList.add('.hide');
    decision.textContent = `Bust! Your score is ${playerScore}`;
  }
};
const main = () => {
  let dealbutton = document.querySelector('.deal');
  dealbutton.addEventListener('click', dealToPlayer);

  let suits = ['clubs', 'spades', 'diamonds', 'hearts'];
  let cards = [
    { value: 2, face: '2' },
    { value: 3, face: '3' },
    { value: 4, face: '4' },
    { value: 5, face: '5' },
    { value: 6, face: '6' },
    { value: 7, face: '7' },
    { value: 8, face: '8' },
    { value: 9, face: '9' },

    { value: 10, face: '10' },
    { value: 10, face: 'J' },
    { value: 10, face: 'Q' },
    { value: 10, face: 'K' },
    { value: 11, face: 'A' }
  ];
  // loop through all the suits
  suits.forEach(suit => {
    // Do this for each suit

    // For this suit go through the cards
    cards.forEach(card => {
      // make a new card to put in the deck
      let nextCard = {
        suit: suit,
        value: card.value,
        face: card.face
      };
      // add it to the deck
      deck.push(nextCard);
    });
  });

  // Shuffle the deck into a random order
  for (let i = 52 - 1; i > 1; i -= 1) {
    let j = Math.floor(Math.random() * i);
    let firstCard = deck[i];
    let secondCard = deck[j];
    deck[i] = secondCard;
    deck[j] = firstCard;
  }

  dealToPlayer();
  dealToPlayer();
  dealToDealer();
  dealToDealer();

  document.querySelector('button.hit').addEventListener('click', dealToPlayer);
};

// if ${playerScore}=== 21 || ${dealerScore}===21 {

//   alert(`Blackjack!`) else
// }

document.addEventListener('DOMContentLoaded', main);
