let history = [];

function clearDisplay() {
    document.getElementById('result').value = '';
}

function deleteDigit() {
    var currentDisplay = document.getElementById('result').value;
    document.getElementById('result').value = currentDisplay.slice(0, -1);
}

function appendCharacter(char) {
    document.getElementById('result').value += char;
}

function calculateResult() {
    var result = document.getElementById('result').value;
    try {
        var calculatedResult = eval(result);
        document.getElementById('result').value = calculatedResult;
        addHistory(result + ' = ' + calculatedResult);
    } catch (error) {
        document.getElementById('result').value = 'Error';
    }
}

function calculatePercentage() {
    var result = document.getElementById('result').value;
    if (result) {
        var percentageResult = eval(result) / 100;
        document.getElementById('result').value = percentageResult;
        addHistory(result + ' = ' + percentageResult);
    }
}

function addHistory(entry) {
    history.push(entry);
    updateHistoryDisplay();
}

function updateHistoryDisplay() {
    var historyContainer = document.getElementById('history');
    historyContainer.innerHTML = '';
    history.forEach(item => {
        var li = document.createElement('li');
        li.textContent = item;
        historyContainer.appendChild(li);
    });
}

function toggleHistory() {
    var historyContainer = document.querySelector('.history-container');
    if (historyContainer.style.display === 'none' || historyContainer.style.display === '') {
        historyContainer.style.display = 'block';
    } else {
        historyContainer.style.display = 'none';
    }
}
