document.getElementById('new-quote').addEventListener('click', getQuote);

function getQuote() {
    fetch('https://api.quotable.io/quotes/random')
        .then(response => response.json())
        .then(data => {
            const quote = data[0];
            document.getElementById('quote-text').textContent = quote.content;
            document.getElementById('quote-author').textContent = `— ${quote.author}`;
        })
        .catch(error => {
            document.getElementById('quote-text').textContent = "Oops! Something went wrong. Please try again.";
            document.getElementById('quote-author').textContent = "";
        });
}

// Load a quote on initial page load
getQuote();
