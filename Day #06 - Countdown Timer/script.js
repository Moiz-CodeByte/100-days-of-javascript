let countdown;

function startTimer() {
    const minutes = parseInt(document.getElementById('minutes').value) || 0;
    const seconds = parseInt(document.getElementById('seconds').value) || 0;
    const totalSeconds = minutes * 60 + seconds;

    if (totalSeconds <= 0) {
      //  alert("");
        showUserMessage("Please enter a valid time.", "error" )
        return;
    }

    clearInterval(countdown);
    const endTime = Date.now() + totalSeconds * 1000;
    displayTimeLeft(totalSeconds);

    countdown = setInterval(() => {
        const secondsLeft = Math.round((endTime - Date.now()) / 1000);

        if (secondsLeft <= 0) {
            clearInterval(countdown);
            showUserMessage("Time's up!" , "success")
            //alert("Time's up!");
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

function showUserMessage(message, type) {
    var messageContainer = document.createElement("div");
    messageContainer.className = "user-message " + type;
    messageContainer.textContent = message;
    document.body.appendChild(messageContainer);
  
    setTimeout(function() {
      messageContainer.remove();
    }, 3000);
  }
  