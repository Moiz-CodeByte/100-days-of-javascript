document.getElementById('markdown-input').addEventListener('input', function() {
    const markdownText = this.value;
    const htmlContent = marked.parse(markdownText); // Use marked.parse()
    document.getElementById('markdown-preview').innerHTML = htmlContent;
});