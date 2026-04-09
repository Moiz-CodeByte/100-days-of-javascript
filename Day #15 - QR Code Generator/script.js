const qrInput = document.getElementById("qrInput");
const generateBtn = document.getElementById("generateBtn");
const qrImage = document.getElementById("qrImage");
const downloadBtn = document.getElementById("downloadBtn");
const message = document.getElementById("message");

function clearQR() {
    qrImage.style.display = "none";
    qrImage.removeAttribute("src");
    downloadBtn.classList.remove("active");
    downloadBtn.removeAttribute("href");
}

function generateQR() {
    const value = qrInput.value.trim();

    if (!value) {
        clearQR();
        message.textContent = "Please enter text or a URL.";
        return;
    }

    const encoded = encodeURIComponent(value);
    const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encoded}`;

    qrImage.src = qrUrl;
    qrImage.style.display = "block";
    downloadBtn.href = qrUrl;
    downloadBtn.classList.add("active");
    message.textContent = "QR code generated.";
}

generateBtn.addEventListener("click", generateQR);

qrInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && (event.ctrlKey || event.metaKey)) {
        generateQR();
    }
});

clearQR();
message.textContent = "Enter text and click Generate QR Code.";
