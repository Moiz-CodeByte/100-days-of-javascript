function generateLoremIpsum() {
  var paragraphs = parseInt(document.getElementById('paragraphs').value);
  var sentences = parseInt(document.getElementById('sentences').value);
  var words = parseInt(document.getElementById('words').value);

  var loremIpsum = generateText(paragraphs, sentences, words);
  document.getElementById('output').value = loremIpsum;
}

function generateText(paragraphs, sentences, words) {
var loremIpsum = '';

for (var p = 0; p < paragraphs; p++) {
loremIpsum += "Lorem Ipsum ";
for (var s = 0; s < sentences; s++) {
  var sentence = generateSentence(words);
  loremIpsum += sentence + ' ';
}
loremIpsum += '\n\n';
}

return loremIpsum;
}


function generateSentence(wordsCount) {
  var words = ["Lorem", "ipsum", "dolor", "sit", "amet,", "consectetur", "adipiscing", "elit.", "Sed", "lacinia", "mauris", "sed", "fermentum", "convallis.", "Vestibulum", "id", "purus", "a", "felis", "facilisis", "tristique.", "Quisque", "pretium", "placerat", "libero,", "id", "fermentum", "lectus", "iaculis", "eu.", "In", "eleifend", "leo", "ut", "nisi", "facilisis,", "ac", "fringilla", "sapien", "egestas.", "Integer", "bibendum", "pulvinar", "felis,", "eu", "ullamcorper", "augue", "semper", "ac.", "Proin", "auctor", "finibus", "lacinia.", "Suspendisse", "auctor", "nisl", "ut", "enim", "feugiat,", "nec", "varius", "dolor", "venenatis."];
  var sentence = "";
  var length = Math.floor(Math.random() * (wordsCount - 3)) + 3; // Random sentence length between 3 and wordsCount
  for (var i = 0; i < length; i++) {
    var word = words[Math.floor(Math.random() * words.length)];
    sentence += word + " ";
  }
  sentence = sentence.trim();
  sentence += ".";
  return sentence;
}



function copyLoremIpsum() {
var output = document.getElementById("output");
var text = output.value;

if (text.length > 0) {
navigator.clipboard.writeText(text)
  .then(function() {
    // User-friendly message
    showUserMessage("Lorem Ipsum text copied to clipboard!", "successcopy");
  })
  .catch(function(error) {
    showUserMessage("Unable to copy Lorem Ipsum text: ", "error");
  });
}
}



function resetForm() {
  document.getElementById('paragraphs').value = '10';
  document.getElementById('sentences').value = '15';
  document.getElementById('words').value = '15';
  document.getElementById('output').value = '';
  document.getElementById('paragraphsOutput').textContent = '10';
  document.getElementById('sentencesOutput').textContent = '15';
  document.getElementById('wordsOutput').textContent = '15';
  showUserMessage("Reset Successfully ", "reset");
}

document.getElementById('paragraphs').addEventListener('input', function() {
  document.getElementById('paragraphsOutput').textContent = this.value;
});

document.getElementById('sentences').addEventListener('input', function() {
  document.getElementById('sentencesOutput').textContent = this.value;
});

document.getElementById('words').addEventListener('input', function() {
  document.getElementById('wordsOutput').textContent = this.value;
});
function showUserMessage(message, type) {
var messageContainer = document.createElement("div");
messageContainer.className = "user-message " + type;
messageContainer.textContent = message;
document.body.appendChild(messageContainer);

setTimeout(function() {
messageContainer.remove();
}, 3000);
}