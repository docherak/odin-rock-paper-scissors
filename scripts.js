// Load buttons and play:

// sem hodit if na 5 bodu a dat disable + reset option (asi pres fci)
const btns = document.querySelectorAll('button');
btns.forEach(btn => btn.addEventListener('click', playerPlay));

// Functions:
function computerPlay() {
  const psr = ["paper", "scissors", "rock", "lizard", "spock"];
  let randIndex = Math.floor(Math.random() * 5);
  return psr[randIndex];
}

function playerPlay(e) {
  let playerSelection = e.target.textContent.toLowerCase();
  singleRound(playerSelection, computerPlay());
}

// dat disable buttons po 5 kolech

function singleRound(playerSelection, computerSelection) {
  console.log(computerSelection);
  console.log(playerSelection);
  if (playerSelection == computerSelection) {
    alert("Tie");
    return 0;
  } else if (((playerSelection == "scissors") & (computerSelection == "paper")) ||
      ((playerSelection == "paper") & (computerSelection == "rock")) ||
      ((playerSelection == "rock") & (computerSelection == "lizard")) ||
      ((playerSelection == "lizard") & (computerSelection == "spock")) ||
      ((playerSelection == "spock") & (computerSelection == "scissors")) ||
      ((playerSelection == "scissors") & (computerSelection == "lizard")) ||
      ((playerSelection == "lizard") & (computerSelection == "paper")) ||
      ((playerSelection == "paper") & (computerSelection == "spock")) ||
      ((playerSelection == "spock") & (computerSelection == "rock")) ||
      ((playerSelection == "rock") & (computerSelection == "scissors"))) {
    alert("Point for player");
    return 1;
  } else {
    alert("Point for the AI");
    return 2;
  }
}

function game() {
  let score = [0,0];
  while (score[0] < 5) {
    let computerSelection = computerPlay();

  //  let playerSelection = prompt("Paper/Scissors/Rock?").toLowerCase();

    let result = singleRound(playerSelection, computerSelection);
    if (result == 1) {
      score[0]++;
    } else if (result == 2) {
      score[1]++;
    } else {
      continue;
    }
    alert(`Score >> Player: ${score[0]}, AI: ${score[1]}.`)
  }
  alert(`Final score >> Player: ${score[0]}, AI: ${score[1]}.`)
}


//for (btn of btns) {
//  console.log(btn.textContent);
//  btn.addEventListener("click", function () {singleRound(btn.textContent, computerSelection)});
//}


//game();
