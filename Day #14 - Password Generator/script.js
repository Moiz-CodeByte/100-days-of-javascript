const lengthInput = document.getElementById("length");
const lengthValue = document.getElementById("lengthValue");
const uppercaseInput = document.getElementById("uppercase");
const lowercaseInput = document.getElementById("lowercase");
const numbersInput = document.getElementById("numbers");
const symbolsInput = document.getElementById("symbols");
const passwordInput = document.getElementById("password");
const generateBtn = document.getElementById("generateBtn");
const copyBtn = document.getElementById("copyBtn");
const message = document.getElementById("message");

const chars = {
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    numbers: "0123456789",
    symbols: "!@#$%^&*()_+{}[]<>?"
};

function getSelectedPool() {
    let pool = "";

    if (uppercaseInput.checked) pool += chars.uppercase;
    if (lowercaseInput.checked) pool += chars.lowercase;
    if (numbersInput.checked) pool += chars.numbers;
    if (symbolsInput.checked) pool += chars.symbols;

    return pool;
}

function generatePassword() {
    const length = Number(lengthInput.value);
    const pool = getSelectedPool();

    if (!pool) {
        passwordInput.value = "";
        message.textContent = "Select at least one character type.";
        return;
    }

    let result = "";

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * pool.length);
        result += pool[randomIndex];
    }

    passwordInput.value = result;
    message.textContent = "Password generated.";
}

lengthInput.addEventListener("input", () => {
    lengthValue.textContent = lengthInput.value;
});

generateBtn.addEventListener("click", generatePassword);

copyBtn.addEventListener("click", async () => {
    if (!passwordInput.value) {
        message.textContent = "Generate a password first.";
        return;
    }

    try {
        await navigator.clipboard.writeText(passwordInput.value);
        message.textContent = "Password copied to clipboard.";
    } catch (error) {
        message.textContent = "Copy failed. Please copy manually.";
    }
});

generatePassword();
