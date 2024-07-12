

document.addEventListener('DOMContentLoaded', () => {
    const choices = ['rock', 'paper', 'scissors'];
    const buttons = document.querySelectorAll('.choice');
    const resultText = document.getElementById('result-text');
  
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        const userChoice = button.id;
        const computerChoice = choices[Math.floor(Math.random() * choices.length)];
        const result = determineWinner(userChoice, computerChoice);
        resultText.textContent = `You chose ${userChoice}, computer chose ${computerChoice}. ${result}`;
      });
    });
  
    function determineWinner(user, computer) {
      if (user === computer) {
        return "It's a draw!";
      } else if (
        (user === 'rock' && computer === 'scissors') ||
        (user === 'paper' && computer === 'rock') ||
        (user === 'scissors' && computer === 'paper')
      ) {
        return "You win!";
      } else {
        return "You lose!";
      }
    }
  });
  