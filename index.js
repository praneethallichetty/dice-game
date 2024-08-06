// Generate random numbers for both dice
var randomNumber1 = Math.floor(Math.random() * 6) + 1; // 1-6
var randomNumber2 = Math.floor(Math.random() * 6) + 1; // 1-6

// Generate image paths
var randomImageSource1 = "images/dice" + randomNumber1 + ".png"; // images/dice1.png - images/dice6.png
var randomImageSource2 = "images/dice" + randomNumber2 + ".png"; // images/dice1.png - images/dice6.png

// Set the image source for both dice
document.querySelectorAll("img")[0].setAttribute("src", randomImageSource1);
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

// Determine the winner and display the result
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}

