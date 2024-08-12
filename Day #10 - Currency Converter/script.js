document.addEventListener('DOMContentLoaded', () => {
    const apiKey = 'b02338043bfb20e7519aad3f5fff62f2';
    const apiURL = `https://api.exchangeratesapi.io/v1/latest?access_key=${apiKey}`;
    
    const fromCurrency = document.getElementById('fromCurrency');
    const toCurrency = document.getElementById('toCurrency');
    const amountInput = document.getElementById('amount');
    const result = document.getElementById('result');
    const convertButton = document.getElementById('convert');

    // Fetch currency options and populate the select elements
    fetch(apiURL)
        .then(response => response.json())
        .then(data => {
            const currencies = Object.keys(data.rates);
            currencies.forEach(currency => {
                let option1 = document.createElement('option');
                let option2 = document.createElement('option');
                option1.value = option2.value = currency;
                option1.textContent = option2.textContent = currency;
                fromCurrency.appendChild(option1);
                toCurrency.appendChild(option2);
            });
        });

    // Convert currency
    convertButton.addEventListener('click', () => {
        const from = fromCurrency.value;
        const to = toCurrency.value;
        const amount = amountInput.value;

        if (from && to && amount) {
            fetch(apiURL)
                .then(response => response.json())
                .then(data => {
                    const rate = data.rates[to] / data.rates[from];
                    const convertedValue = (amount * rate).toFixed(2);
                    result.textContent = `${amount} ${from} = ${convertedValue} ${to}`;
                })
                .catch(error => {
                    result.textContent = 'Error fetching data';
                });
        } else {
            result.textContent = 'Please fill in all fields';
        }
    });
});
