function computerPlay() {
  const psr = ["Paper", "Scissors", "Rock"];
  let randIndex = Math.floor(Math.random() * 3);
  return psr[randIndex];
}

//let computerSelection = computerPlay().toLowerCase();
//console.log(computerSelection);

//let playerSelection = prompt("Paper/Scissors/Rock?").toLowerCase();
//console.log(playerSelection);

function singleRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    alert("Tie");
    return 0;
  } else if ((playerSelection == "paper") & (computerSelection == "rock")) {
    alert("Point for player");
    return 1;
  } else if ((playerSelection == "paper") & (computerSelection == "scissors")) {
    alert("Point for the AI");
    return 2;
  } else if ((playerSelection == "scissors") & (computerSelection == "paper")) {
    alert("Point for player");
    return 1
  } else if ((playerSelection == "scissors") & (computerSelection == "rock")) {
    alert("Point for the AI");
    return 2;
  } else if ((playerSelection == "rock") & (computerSelection == "scissors")) {
    alert("Point for player");
    return 1;
  } else if ((playerSelection == "rock") & (computerSelection == "paper")) {
    alert("Point for the AI");
    return 2;
  }
}

function game() {
  let score = [0,0];
  for (let i = 0; i < 5; i++) {
    let computerSelection = computerPlay().toLowerCase();
    let playerSelection = prompt("Paper/Scissors/Rock?").toLowerCase();
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

game();
