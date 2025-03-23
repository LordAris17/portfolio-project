
function calculateWords() {
    const text = document.getElementById('textInput').value.trim();
    const wordCount = text ? text.split(/\s+/).length : 0;
    document.getElementById('result').innerText = `Word Count: ${wordCount}`;
}