let wontext = document.getElementById('wontext');
let playagain = document.getElementById('playagain');

let win = localStorage.getItem("win")
// const play2name = localStorage.getItem("Nickname1win")

wontext.innerText = `${win} won the game`;
// wontext.innerText = play2name ;

playagain.onclick = function() {
    localStorage.clear();
    window.location.href = "name.html ";
};