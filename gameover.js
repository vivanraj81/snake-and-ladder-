let wontext = document.getElementById('wontext');
let playagain = document.getElementById('playagain');

let backgroundSound = new Audio("./assets/bgmusic.mp3")
backgroundSound.play()
backgroundSound.loop = true

const congratulatoryMessages = [
    "Congratulations! You emerged victorious in the game!",
    "Well done! You're the champion of the game!",
    "Kudos! You've achieved triumph and clinched the game!",
    "Hats off to you! You've secured the win in the game!",
    "Bravo! The game is yours; you've conquered it!"
  ];
  
  // Function to generate a random congratulatory message
  function generateRandomMessage() {
    const randomIndex = Math.floor(Math.random() * congratulatoryMessages.length);
    return congratulatoryMessages[randomIndex];
  }
  
  const randomCongratulation = generateRandomMessage();
let win = localStorage.getItem("win")

wontext.innerText = `${win} ${randomCongratulation}`;

playagain.onclick = function() {
    localStorage.clear();
    window.location.href = "name.html ";
};

playagain.onclick = function() {
    localStorage.clear();
    window.location.href = "name2.html ";
};