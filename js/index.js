var randomNumber1 = Math.floor((Math.random() * 6) + 1);
var randomNumber2 = Math.floor((Math.random() * 6) + 1);

var firstImage = "images/dice"+ randomNumber1+".png";
var secondImage = "images/dice"+ randomNumber2+".png";

var firstDice = document.querySelectorAll(".dice")[0];
firstDice.setAttribute("src",firstImage);
var secondDice = document.querySelectorAll(".dice")[1];
secondDice.setAttribute("src",secondImage);

var winner = document.querySelector("h1");
if(randomNumber1 > randomNumber2) {
  winner.innerText = "🚩Player 1 Wins";
}
else if(randomNumber1 < randomNumber2){
  winner.innerText = "Player 2 Wins 🚩";
}
else {
  winner.innerText = "Draw!";
}
