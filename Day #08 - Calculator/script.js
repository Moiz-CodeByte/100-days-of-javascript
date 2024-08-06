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
        document.getElementById('result').value = eval(result);
    } catch (error) {
        document.getElementById('result').value = 'Error';
    }
}

function calculatePercentage() {
    var result = document.getElementById('result').value;
    if (result) {
        document.getElementById('result').value = eval(result) / 100;
    }
}
