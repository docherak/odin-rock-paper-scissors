// Load buttons and play:

// sem hodit if na 5 bodu a dat disable + reset option (asi pres fci)
let score = [0,0];
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

function killButtons() {
  btns.forEach(btn => {btn.disabled = true})
}

function singleRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
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

  const results = document.createElement('section');
  results.classList.add('results');
  const main = document.querySelector('main');

  if (score[0] < 5) {
    if (singleRound == 0) {
      results.textContent = "It's a tie!";
      main.appendChild(results);
    } else if (singleRound == 1) {
      score[0]++
      results.textContent = `Point for the player! ${playerSelection} beats ${computerSelection}!`;
      main.appendChild(results);
    } else {
      score[1]++
      results.textContent = `Point for the AI! ${computerSelection} beats ${playerSelection}!`;
      main.appendChild(results);
    }
  }

  results.textContent = `Final score: Player: ${score[0]}, AI: ${score[1]}.`
  main.appendChild(results);
