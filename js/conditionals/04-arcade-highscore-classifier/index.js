let playerScore = 10.5;

if (!Number.isInteger(playerScore) || playerScore < 0) {
  console.log("Invalid score.");
} else { 
  if(playerScore <= 999) {
    console.log("Bronze");
    console.log("Every legend starts somewhere!");
  } else if (playerScore <= 4999 ) {
    console.log("Silver");
    console.log("You're getting stronger. Keep going!");
  } else if (playerScore <= 9999) {
    console.log("Gold");
    console.log("You're making your mark!");
  } else if (playerScore <= 19999) {
    console.log("Platinum");
    console.log("Excellence is becoming your standard!");
  } else {
    console.log("Legendary");
    console.log("You've reached legendary status. Nothing can stop you!");
  }
}
