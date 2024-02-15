// add a new class to an element by passing element's id
function addClassById(elementId, newClass) {
  document.getElementById(elementId).classList.add(newClass);
}

// delete an existing class to an element by passing element's id
function removeClassById(elementId, existingClass) {
  document.getElementById(elementId).classList.remove(existingClass);
}

// get inner text as number by id
function getInnerNumberById(elementId) {
  const innerText = document.getElementById(elementId).innerText;
  const convertedNumber = parseInt(innerText);
  return convertedNumber;
}

// set inner text by id
function setInnerTextById(elementId, text) {
  const element =  document.getElementById(elementId);
  element.innerText = text;
}

// generate a random number and return an alphabet for the array
function generateARandomAlphabet() {
  const alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  const randomAlphabetsIndex = Math.round(Math.random() * 25);
  return alphabets[randomAlphabetsIndex];
}
