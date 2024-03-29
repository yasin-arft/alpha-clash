// global variables
let isGameOn = false;
const display = document.getElementById('display');

// onload handler
window.onload = function () {
  addClassById('playground-screen', 'hidden');
  addClassById('score-screen', 'hidden');
}

// to enter the playground
function play() {
  addClassById('home-screen', 'hidden');
  addClassById('score-screen', 'hidden');
  removeClassById('playground-screen', 'hidden');
  continueGame();
  setDefaults();
  isGameOn = true;
}

// continue game based on keyup
document.addEventListener('keyup', handleKeyboardKeyUp);

function handleKeyboardKeyUp(event) {
  if (!isGameOn) {
    return
  }

  const pressedKey = event.key;
  const expectedKey = document.getElementById('current-alphabet').innerText.toLowerCase();

  // end game by pressing 'Esc'
  if (pressedKey === 'Escape') {
    gameOver();
  }

  // check player key press
  if (pressedKey === expectedKey) {
    // increase score
    removeClassById(expectedKey, 'active-kbd');
    continueGame();
    const currentScore = getInnerNumberById('score-count');
    const updatedScore = currentScore + 1;
    setInnerTextById('score-count', updatedScore);
  } else {
    // decrease life
    const currentLife = getInnerNumberById('life-count');
    const updatedLife = currentLife - 1;
    const updatedLifePercentage = updatedLife / 5 * 100;
    setInnerTextById('life-count', updatedLife);

    display.style.background = `linear-gradient(#ffffffb3 ${updatedLifePercentage}%, red)`;

    // game over
    if (updatedLife === 0) {
      gameOver();
    }
  }
}

// continue playing
function continueGame() {
  const alphabet = generateARandomAlphabet();
  setInnerTextById('current-alphabet', alphabet);
  addClassById(alphabet, 'active-kbd');
}

// set defaults values on playground
function setDefaults() {
  setInnerTextById('life-count', 5);
  setInnerTextById('score-count', 0);
}

// game over function
function gameOver() {
  const finalScore = getInnerNumberById('score-count');
  const currentAlphabet = document.getElementById('current-alphabet').innerText.toLowerCase();
  addClassById('playground-screen', 'hidden');
  removeClassById('score-screen', 'hidden');
  removeClassById(currentAlphabet, 'active-kbd');
  setInnerTextById('final-score', finalScore);
  isGameOn = false;
  display.style.background = `linear-gradient(#ffffffb3 100%, red)`;
}