let playerScore = 1200;

// Input validation
if (!Number.isInteger(playerScore) || playerScore < 0) {
  console.log("Invalid score.");
} else { 
  if(playerScore <= 999) {
    console.log("Bronze");
    console.log("Every legend starts somewhere!");
  } else if (playerScore >= 1000 && playerScore <= 4999 ) {
    console.log("Silver");
    console.log("");
  } else if (playerScore >= 5000 && playerScore <= 9999) {
    console.log("Gold");
    console.log("");
  } else if (playerScore >= 10000 && playerScore <= 19999) {
    console.log("Platinum");
    console.log("");
  } else if (playerScore >= 20000) {
    console.log("Legendary");
    console.log("");
  }
}
