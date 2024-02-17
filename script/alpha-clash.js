// function play() {
//   // hide-the home screen
//   const homeGetById = document.getElementById("home-section");
//   homeGetById.classList.add("hidden");

//   //   show the play-ground
//   const playGroundId = document.getElementById("play-ground");
//   playGroundId.classList.remove("hidden");
// }
// ---------------------------------------------
function play() {
  hideElementById("home-section");
  hideElementById("score-section");
  showElementById("play-ground");
  // reset-score and life
  setInnerValueById("life-score", 3);
  setInnerValueById("game-score", 0);
  continueGame();
}
// capture keyboard press
function handleKeyboardButtonPress(event) {
  const playerPressed = event.key;
  console.log("key press", playerPressed);
  // stop the game
  if (playerPressed === "Escape") {
    gameOver();
  }
  // get the expected press
  const currentAlphabetElement = document.getElementById("currentAlphabet");
  const currentAlphabet = currentAlphabetElement.innerText;
  const expectedAlphabet = currentAlphabet.toLowerCase();
  console.log(playerPressed, expectedAlphabet);
  // check matched or not
  if (playerPressed === expectedAlphabet) {
    console.log("You got a point ");

    // update score
    const currentScore = getElementValueById("game-score");

    const updateScore = currentScore + 1;
    setInnerValueById("game-score", updateScore);

    // ------------------------------------------------
    // // 1.get the current score
    // const currentScoreElement = document.getElementById("game-score");
    // const currentScoreText = currentScoreElement.innerText;
    // const currentScore = parseInt(currentScoreText);
    // console.log(currentScore);
    // // 2. increase score by 1
    // const newScore = currentScore + 1;
    // // 3 insert score
    // currentScoreElement.innerText = newScore;
    // -----------------------------------------------------
    removeBackgroundById(expectedAlphabet);
    continueGame();
  } else {
    console.log("you lost your point");
    const currentScore = getElementValueById("life-score");

    const updateScore = currentScore - 1;
    setInnerValueById("life-score", updateScore);
    if (updateScore === 0) {
      gameOver();
    }
    // ------------------------------------------------------
    // // 1.get the element
    // const CurrentLifeElement = document.getElementById("life-score");
    // const currentLifeText = CurrentLifeElement.innerText;
    // const currentScore = parseInt(currentLifeText);
    // // 2.decrease life
    // const newLife = currentScore - 1;
    // // 3 insert life score
    // CurrentLifeElement.innerText = newLife;
    // ------------------------------------------------------
  }
}
document.addEventListener("keyup", handleKeyboardButtonPress);
function continueGame() {
  const alphabet = getARandomAlphabet();

  // console.log(alphabet);
  const currentAlphabetElement = document.getElementById("currentAlphabet");
  currentAlphabetElement.innerText = alphabet;
  // set-background
  setBackgroundById(alphabet);
}
// gameover
function gameOver() {
  hideElementById("play-ground");
  showElementById("score-section");
  // update-final-score
  // 1.get the final score
  const lastScore = getElementValueById("game-score");
  setInnerValueById("last-score", lastScore);
  // clear the last selected alphabet
  const currentAlphabet = getElementTextById("currentAlphabet");
  removeBackgroundById(currentAlphabet);
}
