// add a new class to an element by passing element's id
function addClassById(elementId, newClass) {
  document.getElementById(elementId).classList.add(newClass);
}

// delete an existing class to an element by passing element's id
function removeClassById(elementId, existingClass) {
  document.getElementById(elementId).classList.remove(existingClass);
}

function generateARandomAlphabet() {
  const alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  const randomAlphabetsIndex = Math.round(Math.random() * 25);
  return alphabets[randomAlphabetsIndex];
}
