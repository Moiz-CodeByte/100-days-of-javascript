   // Your JavaScript code goes here (previously provided)
   function pasteText() {
    navigator.clipboard.readText()
      .then(function (text) {
        document.getElementById("inputText").value = text;
      })
      .catch(function (error) {
        console.error('Failed to read clipboard contents: ', error);
      });
  }
  function convertToUppercase() {
    var inputText = document.getElementById("inputText").value;
    var outputText = inputText.toUpperCase();
    document.getElementById("outputText").value = outputText;
  }

  function convertToLowercase() {
    var inputText = document.getElementById("inputText").value;
    var outputText = inputText.toLowerCase();
    document.getElementById("outputText").value = outputText;
  }

  function convertToSentenceCase() {
    var inputText = document.getElementById("inputText").value;
    var outputText = inputText.toLowerCase().replace(/(?:^|\.\s+)(\w)/g, function(match) {
      return match.toUpperCase();
    });
    document.getElementById("outputText").value = outputText;
  }

  function convertToTitleCase() {
    var inputText = document.getElementById("inputText").value;
    var outputText = inputText.toLowerCase().replace(/(?:^|\s)\w/g, function(match) {
      return match.toUpperCase();
    });
    document.getElementById("outputText").value = outputText;
  }
  function convertToMixedCase() {
var inputText = document.getElementById("inputText").value;
var outputText = "";

var toggleCase = true; // variable to toggle between upper and lower case

for (var i = 0; i < inputText.length; i++) {
  var char = inputText.charAt(i);
  if (char.match(/[a-zA-Z]/)) {
    if (toggleCase) {
      outputText += char.toUpperCase();
    } else {
      outputText += char.toLowerCase();
    }
    toggleCase = !toggleCase; // toggle the case for the next character
  } else {
    outputText += char; // non-alphabetic character, keep it unchanged
  }
}

document.getElementById("outputText").value = outputText;
}

function copyText() {
var outputText = document.getElementById("outputText");
outputText.select();
outputText.setSelectionRange(0, 99999);
document.execCommand("copy");
showUserMessage("Text copied to clipboard!", "successcopy");
}
  function resetText() {
    document.getElementById("inputText").value = "";
    document.getElementById("outputText").value = "";
     showUserMessage("Reset Successfully ", "reset");
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