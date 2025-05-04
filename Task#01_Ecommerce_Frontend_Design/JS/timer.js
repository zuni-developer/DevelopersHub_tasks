// Set the countdown target date
const targetDate = new Date();
targetDate.setDate(targetDate.getDate() + 4); // Add 4 days to the current date

function updateTimer() {
  const now = new Date();
  const timeLeft = targetDate - now;

  if (timeLeft > 0) {
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
  } else {
    Document.querySelector('.timer').textContent = 'Offer Expired!';
  }
}

// Update the timer every second
setInterval(updateTimer, 1000);
updateTimer();

