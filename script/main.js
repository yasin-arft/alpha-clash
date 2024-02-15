// to enter the playground
function play() {
  addClassById('home-screen', 'hidden');
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
    removeClassById(expectedKey, 'active-kbd');
    continueGame();
    const currentScore = document.getElementById('score-count').innerText;
    const newScore = parseInt(currentScore) + 1;
    document.getElementById('score-count').innerText = newScore;
  } else {
    const currentLife = document.getElementById('life-count').innerText;
    const newLife = parseInt(currentLife) - 1;
    document.getElementById('life-count').innerText = newLife;
  }
}

// continue playing
function continueGame () {
  const alphabet = generateARandomAlphabet();
  document.getElementById('current-alphabet').innerText = alphabet.toUpperCase();
  addClassById(alphabet, 'active-kbd');
}


// set defaults values on playground
function setDefaults() {
  document.getElementById('life-count').innerText = 5;
  document.getElementById('score-count').innerText = 0;
}