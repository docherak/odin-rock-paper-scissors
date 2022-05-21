// Load buttons and play:

// sem hodit if na 5 bodu a dat disable + reset option (asi pres fci)
let score = [0,0];
const btns = document.querySelectorAll('button');
const main = document.querySelector('main');
const results = document.createElement('section');
results.classList.add('results');
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
  btns.forEach(btn => {btn.disabled = true});
}

function singleRound(playerSelection, computerSelection) {
  if (score[0] >= 5) {
    killButtons();
    results.textContent = `Final score: Player: ${score[0]}, AI: ${score[1]}.`
    main.appendChild(results);
    return;
  }
  if (playerSelection == computerSelection) {
    results.textContent = "It's a tie!";
    main.appendChild(results);
    return;
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
    score[0]++
    results.textContent = `Point for the player! ${playerSelection} beats ${computerSelection}!`;
    main.appendChild(results);
    return;
  } else {
    score[1]++
    results.textContent = `Point for the AI! ${computerSelection} beats ${playerSelection}!`;
    main.appendChild(results);
    return;
  }
}
