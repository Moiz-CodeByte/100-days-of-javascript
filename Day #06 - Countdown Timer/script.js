let countdown;

function startTimer() {
    const minutes = parseInt(document.getElementById('minutes').value) || 0;
    const seconds = parseInt(document.getElementById('seconds').value) || 0;
    const totalSeconds = minutes * 60 + seconds;

    if (totalSeconds <= 0) {
        alert("Please enter a valid time.");
        return;
    }

    clearInterval(countdown);
    const endTime = Date.now() + totalSeconds * 1000;
    displayTimeLeft(totalSeconds);

    countdown = setInterval(() => {
        const secondsLeft = Math.round((endTime - Date.now()) / 1000);

        if (secondsLeft <= 0) {
            clearInterval(countdown);
            alert("Time's up!");
            displayTimeLeft(0);
            return;
        }

        displayTimeLeft(secondsLeft);
    }, 1000);
}

function displayTimeLeft(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;
    const display = `${minutes < 10 ? '0' : ''}${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
    document.getElementById('timer').textContent = display;
}