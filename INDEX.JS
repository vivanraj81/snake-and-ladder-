let tog = 2
var score1 = document.getElementById('score1')
var score2 = document.getElementById('score2')
const tog1 = document.getElementById('nickname1')
var tog2 = document.getElementById('nickname2')
var wontext = document.getElementById('wontext')
var nickname1 ;
var nickname2 ;
// var tog2 = document.getElementById('tog2')


document.addEventListener("DOMContentLoaded", function() {
//     // Your code here
    document.getElementById("Startbtn").addEventListener("click", function () {
        let Nickname1 = document.querySelector("#name1").value;
        console.log(Nickname1);
        window.location.href = "game.html";

        let Nickname2 = document.querySelector("#name2").value;
        console.log(Nickname2);

        localStorage.setItem("Nickname1", Nickname1);
        localStorage.setItem("Nickname2", Nickname2);

        let gg = localStorage.getItem("Nickname1");


    });
});

const play1name = localStorage.getItem("Nickname1")
const play2name = localStorage.getItem("Nickname2")

tog1.innerText = play1name ;
tog2.innerText = play2name ;


let p1sum = 0
let p2sum = 0

// player1 red
function play(player, psum, correction, num) {
    let sum
    if (psum == 'p1sum') {

        p1sum = p1sum + num

        if (p1sum > 100) {
            p1sum = p1sum - num
            // sum = p1sum
        }

        if (p1sum == 1) {
            p1sum = 38
        }
        if (p1sum == 4) {
            p1sum = 14
        }
        if (p1sum == 8) {
            p1sum = 30
        }
        if (p1sum == 21) {
            p1sum = 42
        }
        if (p1sum == 28) {
            p1sum = 76
        }
        if (p1sum == 32) {
            p1sum = 10
        }
        if (p1sum == 36) {
            p1sum = 6
        }
        if (p1sum == 48) {
            p1sum = 26
        }
        if (p1sum == 50) {
            p1sum = 67
        }
        if (p1sum == 62) {
            p1sum = 18
        }
        if (p1sum == 71) {
            p1sum = 92
        }
        if (p1sum == 80) {
            p1sum = 99
        }
        if (p1sum == 88) {
            p1sum = 24
        }
        if (p1sum == 95) {
            p1sum = 56
        }
        if (p1sum == 97) {
            p1sum = 78
        }

        sum = p1sum

        score2.innerText = "SCORE:-" + p1sum;


    }

    // player2 yellow

    if (psum == 'p2sum') {

        p2sum = p2sum + num

        if (p2sum > 100) {
            p2sum = p2sum - num
            // sum = p1sum
        }
        

        if (p2sum == 1) {
            p2sum = 38
        }
        if (p2sum == 4) {
            p2sum = 14
        }
        if (p2sum == 8) {
            p2sum = 30
        }
        if (p2sum == 21) {
            p2sum = 42
        }
        if (p2sum == 28) {
            p2sum = 76
        }
        if (p2sum == 32) {
            p2sum = 10
        }
        if (p2sum == 36) {
            p2sum = 6
        }
        if (p2sum == 48) {
            p2sum = 26
        }
        if (p2sum == 50) {
            p2sum = 67
        }
        if (p2sum == 62) {
            p2sum = 18
        }
        if (p2sum == 71) {
            p2sum = 92
        }
        if (p2sum == 80) {
            p2sum = 99
        }
        if (p2sum == 88) {
            p2sum = 24
        }
        if (p2sum == 95) {
            p2sum = 56
        }
        if (p2sum == 97) {
            p2sum = 78
        }

        sum = p2sum

        // score1.innerText = "SCORE:-" + sum;
        score1.innerText = "SCORE:- " + p2sum;

    }
    document.getElementById(`${player}`).style.transition = `linear all .90s`
    if (sum < 10) {

        document.getElementById(`${player}`).style.left = `${(sum - 1) * 62}px`
        document.getElementById(`${player}`).style.top = `${-0 * 62 - correction}px`
    }
    else if (sum == 100) {
        if (player == 'p1') {
            location.href = "./gameover.html";
            localStorage.setItem("win", play2name);
        }
        else if (player == 'p2') {
            location.href = "./gameover.html";
            localStorage.setItem("win", play1name);
        }
    }else{
             
        numarr = Array.from(String(sum))
        n1 = parseInt(numarr.shift())
        n2 = parseInt(numarr.pop())
        // console.log(n1, n2)

        if (n1 % 2 != 0) {

            if (n2 == 0) {
                document.getElementById(`${player}`).style.left = `${(9) * 62}px`
                document.getElementById(`${player}`).style.top = `${(-n1 + 1) * 62 - correction}px`
            }
            else {
                document.getElementById(`${player}`).style.left = `${(9 - (n2 - 1)) * 62}px`
                document.getElementById(`${player}`).style.top = `${-n1 * 62 - correction}px`

            }

        }
        else if (n1 % 2 == 0) {
            if (n2 == 0) {

                document.getElementById(`${player}`).style.left = `${(0) * 62}px`
                document.getElementById(`${player}`).style.top = `${(-n1 + 1) * 62 - correction}px`
            }
            else {

                document.getElementById(`${player}`).style.left = `${(n2 - 1) * 62}px`
                document.getElementById(`${player}`).style.top = `${-n1 * 62 - correction}px`
            }

        }



    }
}

var diceBtn2 = document.getElementById("diceBtn2");
document.getElementById("diceBtn").addEventListener("click", function () {
    num = Math.floor(Math.random() *6+1)
   var die = document.getElementById("dice")
    
   switch(num){
    case 1:
        die.setAttribute("src", "./Assets/dice1.png");
        break
    case 2:
        die.setAttribute("src", "./Assets/dice2.png");
        break
    case 3:
        die.setAttribute("src", "./Assets/dice3.png");
        break
    case 4:
        die.setAttribute("src", "./Assets/dice4.png");
        break
    case 5:
         die.setAttribute("src", "./Assets/dice5.png");
        break
    case 6:
         die.setAttribute("src", "./Assets/dice6.png");
         break
  }

     if(tog==0){
        diceBtn2.style.visibility = "hidden";
        diceBtn.style.visibility = "visible";
     }else if (tog % 2 != 0) {
        diceBtn2.style.visibility = "hidden";
        diceBtn.style.visibility = "visible";
        play('p1', 'p1sum', 0, num)
    }
    else if (tog % 2 == 0) {
        diceBtn.style.visibility = "hidden";
        diceBtn2.style.visibility = "visible";

        play('p2', 'p2sum', 55, num)
    }

    tog = tog + 1



})


document.getElementById("diceBtn2").addEventListener("click", function () {
    num = Math.floor(Math.random() *6+1)
   var die = document.getElementById("dice")
    
   switch(num){
    case 1:
        die.setAttribute("src", "./Assets/dice1.png");
        break
    case 2:
        die.setAttribute("src", "./Assets/dice2.png");
        break
    case 3:
        die.setAttribute("src", "./Assets/dice3.png");
        break
    case 4:
        die.setAttribute("src", "./Assets/dice4.png");
        break
    case 5:
         die.setAttribute("src", "./Assets/dice5.png");
        break
    case 6:
         die.setAttribute("src", "./Assets/dice6.png");
         break
  }

  if(tog==0){
    diceBtn2.style.visibility = "hidden";
    diceBtn.style.visibility = "visible";
 }else if (tog % 2 != 0) {
        diceBtn2.style.visibility = "hidden";
        diceBtn.style.visibility = "visible";
        play('p1', 'p1sum', 0, num)
    }
    else if (tog % 2 == 0) {
        diceBtn.style.visibility = "hidden";
        diceBtn2.style.visibility = "visible";
        play('p2', 'p2sum', 55, num)
    }

    tog = tog + 1



})