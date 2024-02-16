// function play() {
//   // hide-the home screen
//   const homeGetById = document.getElementById("home-section");
//   homeGetById.classList.add("hidden");

//   //   show the play-ground
//   const playGroundId = document.getElementById("play-ground");
//   playGroundId.classList.remove("hidden");
// }
function play() {
  hideElementById("home-section");
  showElementById("play-ground");
  continueGame();
}
function continueGame() {
  const alphabet = getARandomAlphabet();

  // console.log(alphabet);
  const currentAlphabetElement = document.getElementById("currentAlphabet");
  currentAlphabetElement.innerText = alphabet;
  // set-background
  setBackgroundById(alphabet);
}
