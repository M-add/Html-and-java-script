let score = 0;
let timeLeft = 30;
let timerId;
let circleIntervalId;
const gameDiv = document.querySelector('.game');
const circleDiv = document.getElementById('circle');

function startGame() {
  score = 0;
  timeLeft = 30;
  updateScore();
  updateTimer();
  timerId = setInterval(updateTimer, 1000);
  circleIntervalId = setInterval(moveCircle, 5000);
  document.getElementById('start-btn').disabled = true;
  circleDiv.addEventListener('click', increaseScore);
}

function moveCircle() {
  const x = Math.floor(Math.random() * (gameDiv.offsetWidth - circleDiv.offsetWidth));
  const y = Math.floor(Math.random() * (gameDiv.offsetHeight - circleDiv.offsetHeight));
  circleDiv.style.top = y + 'px';
  circleDiv.style.left = x + 'px';
}

function increaseScore() {
  score++;
  updateScore();
}

function updateScore() {
  document.getElementById('score').textContent = score;
}

function updateTimer() {
  timeLeft--;
  document.getElementById('time').textContent = timeLeft + ' seconds';
  if (timeLeft === 0) {
    endGame();
  }
}

function endGame() {
  clearInterval(timerId);
  clearInterval(circleIntervalId);
  document.getElementById('start-btn').disabled = false;
  circleDiv.removeEventListener('click', increaseScore);
  alert('Game over! You scored ' + score + ' points.');
}
