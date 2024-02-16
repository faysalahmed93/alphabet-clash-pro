function hideElementById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("hidden");
}
function showElementById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove("hidden");
}
function setBackgroundById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("bg-orange-600");
}
function getARandomAlphabet() {
  // get alphabet Array
  const alphabetString = "abcdefghijklmnopqrstuvwxyz";
  const alphabetArray = alphabetString.split("");
  // console.log(alphabet);
  // get index
  const randomNumber = Math.random() * 25;
  const index = Math.round(randomNumber);
  // console.log(index);

  // get Alphabet
  const alphabet = alphabetArray[index];
  return alphabet;
}
