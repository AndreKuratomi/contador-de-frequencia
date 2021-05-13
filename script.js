const button = window.document.getElementById('countButton');

const letters = window.document.getElementById("lettersDiv");
const titleLetters = window.document.createElement('h4');
titleLetters.innerText = "Contagem de letras: "
titleLetters.id = "lettera";
letters.appendChild(titleLetters);

const words = window.document.getElementById("wordsDiv");
const titleWords = window.document.createElement('h4');
titleWords.innerText = "Contagem de palavras: "
titleWords.id = "parola";
words.appendChild(titleWords);

button.addEventListener('click', function() {
    
    let typedText = window.document.getElementById('textInput').value;
    typedText = typedText.toLowerCase();
    typedText = typedText.replace(/[^a-z'\s]+/g, "");
    
    // Contando letras
    const letterCounts = {};
    
    for (let count = 0; count < typedText.length; count++) {

        let currentLetter = typedText[count];

        if (letterCounts[currentLetter] === undefined) {
            letterCounts[currentLetter] = 1;
        } else {
            letterCounts[currentLetter]++;
        }
        
    }

    for (let letter in letterCounts) {
        const span = window.document.createElement('span');
        const textContent = `"${letter}": ${letterCounts[letter]}, `;
        span.innerText = textContent;

        const letters = window.document.getElementById("lettersDiv");
        // letters.className = "lettres";
        letters.style.display = "block";
        letters.style.lineHeight = "2";
        letters.style.transition = "all 1s ease 1s";
        letters.appendChild(span);
    }

    // Contando palavras
    let words = typedText.split(/\s/);
    const wordCounts = {};
    
    for (let count = 0; count < words.length; count++) {
    
        let currentWord = words[count];
    
        if (wordCounts[currentWord] === undefined) {
            wordCounts[currentWord] = 1;
        } else {
            wordCounts[currentWord]++;
        }
    
    }

    for (let word in wordCounts) {
        const span = window.document.createElement('span');
        const textContent = `"${word}": ${wordCounts[word]}, `;
        span.innerText = textContent;

        const words = window.document.getElementById("wordsDiv");
        // words.className = "mots";
        words.style.display = "block";
        words.style.lineHeight = "2";
        // words.style.transition = "ease 1s";
        words.appendChild(span);
    }

    button.style.display = "none";
});