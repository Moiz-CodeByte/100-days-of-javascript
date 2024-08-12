document.addEventListener('DOMContentLoaded', () => {
    const apiKey = 'b02338043bfb20e7519aad3f5fff62f2';
    const apiURL = `https://api.exchangeratesapi.io/v1/latest?access_key=${apiKey}`;
    
    const fromCurrency = document.getElementById('fromCurrency');
    const toCurrency = document.getElementById('toCurrency');
    const amountInput = document.getElementById('amount');
    const result = document.getElementById('result');
    const convertButton = document.getElementById('convert');
    const swapButton = document.getElementById('swap');

//     // Mapping of currency codes to flag emojis
//     const currencyFlags = {
//         "AED": "🇦🇪",
//         "AFN": "🇦🇫",
//         "ALL": "🇦🇱",
//         "AMD": "🇦🇲",
//         "ANG": "🇳🇱",
//         "AOA": "🇦🇴",
//         "ARS": "🇦🇷",
//         "AUD": "🇦🇺",
//         "AWG": "🇦🇼",
//         "AZN": "🇦🇿",
//         "BAM": "🇧🇦",
//         "BBD": "🇧🇧",
//         "BDT": "🇧🇩",
//         "BGN": "🇧🇬",
//         "BHD": "🇧🇭",
//         "BIF": "🇧🇮",
//         "BMD": "🇧🇲",
//         "BND": "🇧🇳",
//         "BOB": "🇧🇴",
//         "BRL": "🇧🇷",
//         "BSD": "🇧🇸",
//         "BTN": "🇧🇹",
//         "BWP": "🇧🇼",
//         "BYN": "🇧🇾",
//         "BZD": "🇧🇿",
//         "CAD": "🇨🇦",
//         "CDF": "🇨🇩",
//         "CHF": "🇨🇭",
//         "CLP": "🇨🇱",
//         "CNY": "🇨🇳",
//         "COP": "🇨🇴",
//         "CRC": "🇨🇷",
//         "CUC": "🇨🇺",
//         "CUP": "🇨🇺",
//         "CVE": "🇨🇻",
//         "CZK": "🇨🇿",
//         "DJF": "🇩🇯",
//         "DKK": "🇩🇰",
//         "DOP": "🇩🇴",
//         "DZD": "🇩🇿",
//         "EGP": "🇪🇬",
//         "ERN": "🇪🇷",
//         "ETB": "🇪🇹",
//         "EUR": "🇪🇺",
//         "FJD": "🇫🇯",
//         "FKP": "🇫🇰",
//         "GBP": "🇬🇧",
//         "GEL": "🇬🇪",
//         "GGP": "🇬🇬",
//         "GHS": "🇬🇭",
//         "GIP": "🇬🇮",
//         "GMD": "🇬🇲",
//         "GNF": "🇬🇳",
//         "GTQ": "🇬🇹",
//         "GYD": "🇬🇾",
//         "HKD": "🇭🇰",
//         "HNL": "🇭🇳",
//         "HRK": "🇭🇷",
//         "HTG": "🇭🇹",
//         "HUF": "🇭🇺",
//         "IDR": "🇮🇩",
//         "ILS": "🇮🇱",
//         "IMP": "🇮🇲",
//         "INR": "🇮🇳",
//         "IQD": "🇮🇶",
//         "IRR": "🇮🇷",
//         "ISK": "🇮🇸",
//         "JEP": "🇯🇪",
//         "JMD": "🇯🇲",
//         "JOD": "🇯🇴",
//         "JPY": "🇯🇵",
//         "KES": "🇰🇪",
//         "KGS": "🇰🇬",
//         "KHR": "🇰🇭",
//         "KMF": "🇰🇲",
//         "KPW": "🇰🇵",
//         "KRW": "🇰🇷",
//         "KWD": "🇰🇼",
//         "KYD": "🇰🇾",
//         "KZT": "🇰🇿",
//         "LAK": "🇱🇦",
//         "LBP": "🇱🇧",
//         "LKR": "🇱🇰",
//         "LRD": "🇱🇷",
//         "LSL": "🇱🇸",
//         "LTL": "🇱🇹",
//         "LVL": "🇱🇻",
//         "LYD": "🇱🇾",
//         "MAD": "🇲🇦",
//         "MDL": "🇲🇩",
//         "MGA": "🇲🇬",
//         "MKD": "🇲🇰",
//         "MMK": "🇲🇲",
//         "MNT": "🇲🇳",
//         "MOP": "🇲🇴",
//         "MRU": "🇲🇷",
//         "MUR": "🇲🇺",
//         "MVR": "🇲🇻",
//         "MWK": "🇲🇼",
//         "MXN": "🇲🇽",
//         "MYR": "🇲🇾",
//         "MZN": "🇲🇿",
//         "NAD": "🇳🇦",
//         "NGN": "🇳🇬",
//         "NIO": "🇳🇮",
//         "NOK": "🇳🇴",
//         "NPR": "🇳🇵",
//         "NZD": "🇳🇿",
//         "OMR": "🇴🇲",
//         "PAB": "🇵🇦",
//         "PEN": "🇵🇪",
//         "PGK": "🇵🇬",
//         "PHP": "🇵🇭",
//         "PKR": "🇵🇰",
//         "PLN": "🇵🇱",
//         "PYG": "🇵🇾",
//         "QAR": "🇶🇦",
//         "RON": "🇷🇴",
//         "RSD": "🇷🇸",
//         "RUB": "🇷🇺",
//         "RWF": "🇷🇼",
//         "SAR": "🇸🇦",
//         "SBD": "🇸🇧",
//         "SCR": "🇸🇨",
//         "SDG": "🇸🇩",
//         "SEK": "🇸🇪",
//         "SGD": "🇸🇬",
//         "SHP": "🇸🇭",
//         "SLL": "🇸🇱",
//         "SOS": "🇸🇴",
//         "SRD": "🇸🇷",
//         "STD": "🇸🇹",
//         "SVC": "🇸🇻",
//         "SYP": "🇸🇾",
//         "SZL": "🇸🇿",
//         "THB": "🇹🇭",
//         "TJS": "🇹🇯",
//         "TMT": "🇹🇲",
//         "TND": "🇹🇳",
//         "TOP": "🇹🇴",
//         "TRY": "🇹🇷",
//         "TTD": "🇹🇹",
//         "TWD": "🇹🇼",
//         "TZS": "🇹🇿",
//         "UAH": "🇺🇦",
//         "UGX": "🇺🇬",
//         "USD": "🇺🇸",
//         "UYU": "🇺🇾",
//         "UZS": "🇺🇿",
//         "VES": "🇻🇪",
//         "VND": "🇻🇳",
//         "VUV": "🇻🇺",
//         "WST": "🇼🇸",
//         "XAF": "🇨🇲",
//         "XCD": "🇦🇬",
//         "XDR": "🏳",
//         "XOF": "🇸🇳",
//         "XPF": "🇵🇫",
//         "YER": "🇾🇪",
//         "ZAR": "🇿🇦",
//         "ZMK": "🇿🇲",
//         "ZMW": "🇿🇲",
//         "ZWL": "🇿🇼"
//     }
    

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

    // Swap currencies
    swapButton.addEventListener('click', () => {
        const temp = fromCurrency.value;
        fromCurrency.value = toCurrency.value;
        toCurrency.value = temp;
        result.textContent = '';
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
            result.textContent = 'Please enter value you want to convert';
        }
    });
});
