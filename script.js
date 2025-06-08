// For now, this file can be empty or hold shared logic later

// Example: Simple alert for navigation (can expand)
document.addEventListener('DOMContentLoaded', () => {
  console.log('CodeQuest game loaded');
});

function startTimer(duration, onExpire) {
  let timeLeft = duration;
  const timerDisplay = document.getElementById('time');
  timerDisplay.textContent = timeLeft;
  
  const interval = setInterval(() => {
    timeLeft--;
    timerDisplay.textContent = timeLeft;
    if (timeLeft <= 0) {
      clearInterval(interval);
      onExpire();
      alert('Time is up! Try again or move on.');
  // Optionally disable inputs or show “Next Level” button here
    }
  }, 1000);
  return interval;
}
