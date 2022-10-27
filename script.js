let player={
name : "Trishan",chip:190
}
let cards = [];
let sum = 0;
let isAlive = false;
let hasblackjack = false;
let message = '';
let messageEl = document.getElementById('message-el');
let sumEl = document.querySelector('#sum-el');
let cardEl = document.querySelector('#card-el');
let playerEl = document.querySelector('#player-el');
playerEl.textContent = player.name +': '+' $'+player.chip;
function getrandomcard() {
  let random_num = Math.floor(Math.random() * 13) + 1;
  if (random_num === 1) {
    return 11;
  } else if (random_num >= 11) {
    return 10;
  } else {
    return random_num;
  }
}
function start() {
  isAlive = true;
  let firstcard = getrandomcard();
  let secondcard = getrandomcard();
  cards = [firstcard, secondcard];
  sum = firstcard + secondcard;
  render();
}
function render() {
  cardEl.textContent = 'Cards: ';
  for (let i = 0; i < cards.length; i++) {
    cardEl.textContent += cards[i] + ' ';
  }
  if (sum <= 20) {
    message = 'Do you want another card?';
  } else if (sum === 21) {
    message = 'Wooho!,You got blackjack!';
    hasblackjack = true;
  } else {
    message = 'You are out of the game.';
    isAlive = false;
  }
  messageEl.textContent = message;
  sumEl.textContent = 'Sum: ' + sum;
}
function newcard() {
if (isAlive===true && hasblackjack===false){
  let card = getrandomcard();
  sum += card;
  cards.push(card);
  console.log(cards);
  render();
}

}
