// //where the player score is displayed
// let showPlayer = document.querySelector(".player-score")

// //where the dealer score is diplayed
// let showDealer = document.querySelector(".dealer-score")

// // where message for game status is diplayed
// let displayStatus = document.querySelector(".winlose")

//count players score and ends turn after 5 cards
let countPlayer = () => {
  if (playerHand.length === 2) {
    playerCount = playerHand[0].value + playerHand[1].value;
    showPlayer.textContent = playerCount;
  }
  if (playerHand.length === 3) {
    playerCount =
      playerHand[0].value + playerHand[1].value + playerHand[2].value;
    showPlayer.textContent = playerCount;
  }
  if (playerHand.length === 4) {
    playerCount =
      playerHand[0].value +
      playerHand[1].value +
      playerHand[2].value +
      playerHand[3].value;
    showPlayer.textContent = playerCount;
  }
  if (playerHand.length === 5) {
    playerCount =
      playerHand[0].value +
      playerHand[1].value +
      playerHand[2].value +
      playerHand[3].value +
      playerHand[4].value;
    showPlayer.textContent = playerCount;
    noMore();
  }
};
// counts dealers score and ends game after 5 cards
let countDealer = () => {
  if (dealerHand.length === 2) {
    dealerCount = dealerHand[0].value + dealerHand[1].value;
    showDealer.textContent = dealerCount;
  }
  if (dealerHand.length === 3) {
    dealerCount =
      dealerHand[0].value + dealerHand[1].value + dealerHand[2].value;
    showDealer.textContent = dealerCount;
  }
  if (dealerHand.length === 4) {
    dealerCount =
      dealerHand[0].value +
      dealerHand[1].value +
      dealerHand[2].value +
      dealerHand[3].value;
    showDealer.textContent = dealerCount;
  }
  if (dealerHand.length === 5) {
    dealerCount =
      dealerHand[0].value +
      dealerHand[1].value +
      dealerHand[2].value +
      dealerHand[3].value +
      dealerHand[4].value;
    showDealer.textContent = dealerCount;
    checkWinner();
  }
};

// determines who won
const checkWinner = () => {
  console.log('check winner');
  if (dealerCount > playerCount) {
    displayStatus.textContent =
      'DEALER HAS ' + `${showDealer.textContent}` + ', YOU LOSE.';
  }
  if (dealerCount < playerCount) {
    displayStatus.textContent =
      'YOU HAVE ' + `${showPlayer.textContent}` + ', YOU WIN!';
  }
  if (dealerCount === playerCount) {
    displayStatus.textContent =
      'YOU BOTH HAVE' + `${showPlayer.textContent}` + ', THE DEALER WINS.';
  }
};

// arguments for the stay button and ends game if dealer busts
const noMore = () => {
  console.log('stay');
  // hides the stay and hit button and back of card image in dealers hand.
  document.querySelector('.hits').classList.add('hideme');
  document.querySelector('.stays').classList.add('hideme');
  document.querySelector('.back').classList.add('hideme');
  dealCardToDealer();
  countDealer();
  if (dealerCount < 17) {
    noMore();
  }
  if (dealerCount >= 17 && dealerCount <= 21) {
    checkWinner();
  }
  if (dealerCount > 21) {
    displayStatus.textContent =
      'DEALER BUSTED WITH ' + `${showDealer.textContent}` + ', YOU WIN!';
  }
};

// argument for the hit button and ends game if player busts
const giveMore = () => {
  console.log('hit');
  dealCardToPlayer();
  countPlayer();
  if (playerCount <= 21) {
    displayStatus.textContent =
      'YOU HAVE ' + `${showPlayer.textContent}` + ', HIT OR STAY';
  }
  if (playerCount > 21) {
    document.querySelector('.hits').classList.add('hideme');
    document.querySelector('.stays').classList.add('hideme');
    displayStatus.textContent = 'YOU BUSTED, PLAY AGAIN';
  }
};

const dealCardToPlayer = upOrDown => {
  countPlayer();

  // Go find my dealer-hand div
  const playerHandDiv = document.querySelector('.player-hand');

  // Make a new image tag in memory
  let image = document.createElement('img');

  // Tell that image tag where it's image is. We do this dynamically
  // based on the face and the suit
  image.src = `/images/${card.face}${card.suit}.jpg`;
  // Push that image tag into the DIV as a child
  playerHandDiv.appendChild(image);
};

const dealCardToDealer = upOrDown => {
  // Take one card from the deck
  let card = deck.pop();

  // Place that card in the dealer's hand
  dealerHand.push(card);

  // Go find my dealer-hand div
  const dealerHandDiv = document.querySelector('.dealer-hand');

  // Make a new image tag in memory
  let image = document.createElement('img');

  // Tell that image tag where it's image is. We do this dynamically
  // based on the face and the suit
  image.src = `/images/${card.face}${card.suit}.jpg`;

  // Push that image tag into the DIV as a child
  dealerHandDiv.appendChild(image);
};

const main = () => {
  dealCardToPlayer('up');
  dealCardToPlayer('up');
  dealCardToDealer('up');
  //dealCardToDealer('down')
  countPlayer();
  // makes the dealer score a ? at the begining
  showDealer.textContent = '?';
  // message for begining of game
  displayStatus.textContent =
    'YOU HAVE ' + `${showPlayer.textContent}` + ', HIT OR STAY';
  // all the event listener for the buttons
  document.querySelector('.hits').addEventListener('click', giveMore);
  document.querySelector('.stays').addEventListener('click', noMore);
  document.querySelector('.reset').addEventListener('click', () => {
    document.location = '/';
  });
};

document.addEventListener('DOMContentLoaded', main);
