let score = parseInt(localStorage.getItem("finalScore")) || 0;
let mistakes = parseInt(localStorage.getItem("finalMistakes")) || 0;

console.log("Current Score Loaded:", score); // Check sa console

function CorrectAnswer() {
    score += 1;
    localStorage.setItem("finalScore", score);
}

function Mistakes() {
    mistakes += 1;
    localStorage.setItem("finalMistakes", mistakes);
}

// Para sa huling tanong
function CorrectAnswerDirect() {
    score += 1;
    localStorage.setItem("finalScore", score);
    localStorage.setItem("finalMistakes", mistakes);
    window.location.href = "TotalScore.html";
}

function MistakesDirect() {
    mistakes += 1;
    localStorage.setItem("finalScore", score);
    localStorage.setItem("finalMistakes", mistakes);   
    window.location.href = "TotalScore.html";
}

function RESETData() {
    localStorage.clear(); // Mas malinis na paraan para burahin lahat
    window.location.href = "QUESTIONS/Question1.html"; // Balik sa Home
}

// 3. DISPLAY LOGIC (Siguraduhin na tama ang IDs mo)
window.onload = function() {    
    const scoreDisplay = document.getElementById("ScoreH1");
    const mistakeDisplay = document.getElementById("MistakesH1");

    if (scoreDisplay) {
        scoreDisplay.innerHTML = "Total correct answers: " + score;
    }
    if (mistakeDisplay) {
        mistakeDisplay.innerHTML = "Total mistakes: " + mistakes;
    }
};