// global variables
const lifeCount = document.getElementById('life-count');
const scoreCount = document.getElementById('score-count');

// onload handler
window.onload = function() {
  addClassById('playground-screen', 'hidden');
  addClassById('final-score', 'hidden');
}

// to enter the playground
function play() {
  addClassById('home-screen', 'hidden');
  addClassById('final-score', 'hidden');
  removeClassById('playground-screen', 'hidden');
  continueGame();
  setDefaults();
}

// continue game based on keyup
document.addEventListener('keyup', handleKeyboardKeyUp);
function handleKeyboardKeyUp(event) {
  const pressedKey = event.key;
  const expectedKey = document.getElementById('current-alphabet').innerText.toLowerCase();
  if (pressedKey === expectedKey) {
    // increase score
    removeClassById(expectedKey, 'active-kbd');
    continueGame();
    const currentScore = scoreCount.innerText;
    const updatedScore = parseInt(currentScore) + 1
    scoreCount.innerText = updatedScore;
  } else {
    // decrease life
    const currentLife = lifeCount.innerText;
    const updatedLife = parseInt(currentLife) - 1
    lifeCount.innerText = updatedLife;
    // game over
    if (updatedLife === 0) {
      addClassById('playground-screen', 'hidden');
      removeClassById('final-score', 'hidden');
    }
  }
}

// continue playing
function continueGame() {
  const alphabet = generateARandomAlphabet();
  document.getElementById('current-alphabet').innerText = alphabet.toUpperCase();
  addClassById(alphabet, 'active-kbd');
}

// set defaults values on playground
function setDefaults() {
  lifeCount.innerText = 5;
  scoreCount.innerText = 0;
}